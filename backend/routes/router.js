const express = require('express');
const router = express.Router();
const User = require('../models/userModel')
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const sendEmail = require('../../src/components/Mailer');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();



router.post('/signup', async (req, res) => {
    try {
        const {username, email, password} = req.body;

        console.log(req.body);

        //add logic to check if user exist
        const user = await User.findOne({email})
        if (user) {
            res.status(400).json({})
            return console.log("User already exist. Please login");
        }

        //add logic to hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash
        (password, salt)

        const newUser = new User ({
            username, 
            email, 
            password: hashedPassword, 
        });

        //saving the user
        const savedUser = await newUser.save();
        console.log(savedUser);

        console.log("Signup successfully")

        //send verification email
        await sendEmail({email, emailType: 'VERIFY', userId: savedUser._id});

        res.status(201).json({message: 'User created successfully'});
    } catch (error) {
        console.log("Signup failed" + error);
        res.status(500).json({message: 'Signup failed'});
    }
});

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(req.body);

        //check if user exist
        const user = await User.findOne({email})
        if (!user) {
            res.status(400).json({message: "User doesn't exist. Please signup"});
            return console.log("User doesn't exist. Please signup")
        }

        //check if password is valid
        const validPassword = await bcryptjs.compare
        (password, user.password)
        // console.log("Stored hashed password", user.password)            
        // console.log("Password to compare", password)

        if (!validPassword) {
            res.status(400).json({message: "Invalid password"});
            return console.log("Invalid password. Try again") 
        }

        //create token data
        const tokenData = {
            id: user._id, 
            username: user.username, 
            email: user.email, 
        }

        //create token
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1d"})

        //set cookie
        res.cookie("access_token", token, {
            httpOnly: true, 
            maxAge: 24 * 60 * 60 * 1000, 
        });

        // console.log("Cookie set successful");
        console.log("Login successful")
        return res.status(201).json({
            message: "Login successful",
            access_token: token, 
            success: true, 
        });

        
    } catch (error) {
        console.log("Login failed" + error);
        res.status(500).json({message: "Login failed"});
     } 

});

router.get('/logout', async (req, res) => {
    try {
        console.log("Logout successful")

        return res.status(201).json({
            message: "Logout successful", 
            access_token: "", 
            success: true,
        })


    } catch (error) {
        res.status(500).json({message: "Logout failed"});
    }
} );

router.use(express.json());
const url = process.env.MONGO_URI;

router.post('/verifyEmail', async (req, res) => {
    try {
        const token = req.body.token;
        console.log("Received token", token);

        MongoClient.connect(url, async (err, client) => {
            if (err) {
                console.log("MongoDB connection error", err);
                return res.status(500).json({error: "MongoDB connection error"});
            }

            const db = client.db();

            console.log("Before mongo query");
            const user = await db.collection('users').findOne({
                verifyToken: token, 
                verifyTokenExpiry: {$gt: Date.now()}
            });
            console.log("after mongo query");

            console.log("User found", user);

            client.close();

            if (!user) {
                return res.status(400).json({error: "Invalid token"});
            }

            console.log(user);

            user.isVerified = true; 
            user.verifyToken = undefined;
            user.verifyTokenExpiry = undefined;
            console.log("Before user.save()");
            await user.save();
            console.log("After user.save()");

            return res.json({
                message: "Email verified successfully", 
                success: true,
            });
        });

        

    } catch (error) {
        console.log("Verify email failed" + error);
        res.status(500).json({error: error.message})
    }
})


router.use(cookieParser());


// router.get('/profile', async (req, res) => {
//     try {
//         const userID = await getDataFromToken(req);
//         const user = await User.findOne({_id: userID}).select("-password");
//         if (!user) {
//             return res.status(404).json({error: "User not found"});
//         }
       

//         return res.status(200).json({
//             message: "User found", 
//             data: user
//         });
//     } catch (error) {
//         console.error("Error in /profile route", error);
//         return res.status(500).json({error: "Internal server error"}); 
//     }
// });


module.exports = router;