const {PrismaClient} = require("@prisma/client")
const express = require("express");
const app = express()
const ejs = require("ejs")

app.use(express.json())
app.set("view engine","ejs")


const prisma = new PrismaClient

let homepage = async(req, res) => {
    try {
        const ropa = await prisma.ropa.findMany({
            include: {
                catigory:true
            }
        })
        const allchefs = await prisma.employees.findMany();
        const restaurant= await prisma.restaurant.findMany()
        const category= await prisma.category.findMany()
        res.render("index", { ropa, allchefs,restaurant,category});
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error");
    } finally {
        await prisma.$disconnect();
    }
}





module.exports ={homepage}