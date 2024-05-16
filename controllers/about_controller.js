const {PrismaClient} = require("@prisma/client")

const express = require("express");
const app = express()
const ejs = require("ejs")

app.use(express.json())
app.set("view engine","ejs")

const prisma = new PrismaClient


let aboutpage= async (req,res)=>{
    try {
        const allchefs = await prisma.employees.findMany()
        await res.render("about",{allchefs})
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    }
    finally{
        await prisma.$disconnect();
    }
}


module.exports = aboutpage 