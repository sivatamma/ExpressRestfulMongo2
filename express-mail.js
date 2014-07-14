var express = require('express')
     , bodyParser = require('body-parser')
var http = require("http"),
     path = require("path");
     
     
var nodemailer = require("nodemailer");

var app = express();

var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "siva77.reddy@gmail.com",
        pass: "computerjava"
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: "siva <siva77.reddy@gmail.com>", // sender address
    to: "siva tamma, siva77.tamma@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world ✔", // plaintext body
    html: "<b>Hello world ✔</b>" // html body
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});
app.listen(3000);
