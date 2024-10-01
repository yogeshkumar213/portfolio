const express = require('express')
const cors=require("cors")
require('dotenv').config();
const nodemailer=require("nodemailer");

const app=express();
const port=8080;


app.use(express.json());
app.use(cors());
app.post("/formdata",(req,res)=>{
    console.log(req.body)
    let transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS,
            
        }
    });
    let mailOptions={
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject:"Portfolio Notification",
        text:req.body.message,
        replyTo:req.body.emailAdd
    }  
    // console.log(mailOptions.from) 
    transporter.sendMail(mailOptions,((err,info)=>{
        if(err){
            return console.log(err)
        }
        console.log("Email sent :"+info.response)
    }))
  

    res.json({ message: "Data received successfully" }); 
});


app.listen(port,()=>{
    console.log(`server is listening at ${port}`)
});