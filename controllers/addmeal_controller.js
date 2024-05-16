const {PrismaClient} = require("@prisma/client")

const express = require("express");
const app = express()
const ejs = require("ejs")

app.use(express.json())
app.set("view engine","ejs")

const prisma = new PrismaClient



const addmealpage = async(req,res)=>{
    try {
        const categorys= await prisma.category.findMany()
        await res.render("addMeal",{categorys})
    } catch (error) {
        console.log(error)
    }
    finally{
        await prisma.$disconnect()
    }
}



let addmeal = async(req,res)=>{
    try {
    // if (!req.body.meal_name||!req.body.meal_description||!req.body.meal_price) {
    //     res.status(400).json({error:"meal name &discreption& prisce are required"})
    // }
    // if (typeof req.body.meal_name!=="strng"|| typeof req.body.meal_description!=="string"||typeof req.body.meal_price !== "number") {
    //     res.status(400).json({error:"invalide data form"})
    // }
    let meal = await prisma.ropa.create({
        data:{
            meal_name:req.body.meal_name,
            meal_description :req.body.meal_description,
            meal_price:Number(req.body.meal_price),
            meal_img:req.body.meal_img,
            catigoryID:1,
        }
    })
        res.redirect("/index")
    } catch (error) {
        console.error(error)
        res.status(500).send("Internal server error")
    }
    finally{
        await prisma.$disconnect()
    }
}

module.exports = {addmeal,addmealpage}