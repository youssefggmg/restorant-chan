const {PrismaClient} = require("@prisma/client")
const nodemailer = require("nodemailer")

const express = require("express");
const app = express()
const ejs = require("ejs");
const { transports } = require("winston");

app.use(express.json())
app.set("view engine","ejs")

const prisma = new PrismaClient



const newUser=async(req,res)=>{
    try {
        const user= await prisma.newsletter.create({
            data:{
                newsletter_email:req.body.email, 
                restaurantID:1
            }
        })
        
        const transporter = nodemailer.createTransport({
            host:"smtp.zoho.com",
            port:465,
            secure:true,
            auth:{
                user:"apprenant3@talents4starups.com",
                pass:"c2ddvc-A"
            }
        })
        const mailoption={
            from:"apprenant3@talents4starups.com",
            to:req.body.email,
            subject:" thanks letter for subscribing in our news lette",
            text:`Thank you for subscribing to our newsletter! Your support means the world to us. We're excited to keep you informed and engaged with our latest updates and insights. Stay tuned for valuable content delivered straight to your 
            \n
            \n inbox.Best regards,
            \n[Your Name/Organization]`
        }
        transporter.sendMail(mailoption, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.redirect("/index");
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
    finally{
        await prisma.$disconnect();
    }
}


module.exports = newUser