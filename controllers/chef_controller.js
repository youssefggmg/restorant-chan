const {PrismaClient} = require("@prisma/client")
const express = require("express");
const app = express()
const ejs = require("ejs")

app.use(express.json())
app.set("view engine","ejs")


const prisma = new PrismaClient


const addchef = async (req, res) => {
    try {
        // Perform form validation
        if (!req.body.employee_name || !req.body.restorntID || req.body.employee_img) {
            return res.status(400).json({ error: "Name, restorntID and image are required" });
        }
        if (typeof req.body.name !== "string" || typeof req.body.restorntID !== "number"||typeof req.body.employee_img !== "string") {
            return res.status(400).json({ error: "Invalid data format" });
        }
        // Create chef if validation passes
        const newchef = await prisma.employees.create({
            data:req.body
        });
        res.status(201).json(newchef);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    } finally {
        await prisma.$disconnect();
    }
};


module.exports = addchef