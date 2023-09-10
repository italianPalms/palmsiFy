const express = require('express');
const router = express.Router();
const User = require('../models/userModel')
const bcryptjs = require('bcryptjs');


router.post('/signup', async (req, res) => {
    try {
        const {username, email, password} = req.body;

        console.log(req.body);

        //add logic to check if user exist

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

        res.status(201).json({message: 'User created successfully'});
    } catch (error) {
        console.log("Signup failed" + error);
        res.status(500).json({message: 'Signup failed'});
    }
});

module.exports = router;

// module.exports = async function POST(req, res) {
//     try {
//         const reqBody = await req.json()
//         const {username, email, password} = req.Body

//         console.log(req.Body)

//         const newUser = new User({
//             username, 
//             email, 
//             password,
//         })

//         const savedUser = await newUser.save()
//         console.log(savedUser)
//     } catch (error) {
//         console.log("Signup failed" + error)
        
//     }
// }