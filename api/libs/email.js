const nodemailer = require('nodemailer');
const dotenv=require('dotenv')


module.exports.sendmail=function sendmail(receiver,otp){

    // Create a Nodemailer transporter using your email service details
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SERVICE_MAIL, // replace with your Gmail email
        pass: process.env.APP_PASSWORD, // replace with your Gmail password or application-specific password
    },
    });

    // Create an email message

    const mailOptions = {
    from: process.env.SERVICE_MAIL, // replace with your Gmail email
    to: receiver,
    subject: 'email verification',
    text: `your one time password is ${otp}. \n Team Career Forge`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
    });


}

