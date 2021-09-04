const express = require('express')
require('dotenv').config();
const nodemailer = require('nodemailer');
const app = express()
const port = 3030

// Circle back to using node mailer, we need to set up creds in
// google and its a long process and annoying

console.log(process.env.PASSWORD)

// let transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'sender@gmail.com',       // sender's gmail id
//     pass: 'sender password'     // sender password
//   }
// });

// var mailOptions = {
//   from: 'sender@gmail.com',                   // sender's gmail
//   to: 'receiver@gmail.com',                  // receiver's gmail
//   subject: 'Sending Email using Node.js',     //subject
//   text: 'That was easy!'                      //message Description
// };

// //send mail using transport object’s sendMail() function
// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

app.get('/send', (req, res) => {
  console.log('hit send email route', req.body)
})

app.listen(port, () => {
  console.log(`tita tacos is listening at http://localhost:${port}`)
})