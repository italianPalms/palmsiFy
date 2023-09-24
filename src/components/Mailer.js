const nodemailer = require('nodemailer');
const User = require('../../backend/models/userModel');
const bcryptjs = require('bcryptjs');

const sendEmail = async({email, emailType, userId}) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === 'VERIFY') {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken, 
                verifyTokenExpiry: Date.now() + 3600000
            })
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: process.env.NODEMAILER_USER,
              pass: process.env.NODEMAILER_PASS
            }
          });

          const mailOptions = {
              from: 'palms@gmail.com', 
              to: email, 
              subject: emailType === 'VERIFY' ? 'Verify your email' : 'Reset your password', 
              html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to verify your email, or copy and paste this link into your browser: <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>`
              
            }; 

          const mailresponse = await transport.sendMail(mailOptions);
          console.log("Email sent succesfully", mailresponse);
          return mailresponse;

    } catch (error) {
        console.log('Email sending error', error)
        throw new Error(error.message);
    }
} 

module.exports = sendEmail;