const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient


const addCategory = async (req,res)=>{
    try {
        if (!req.body.category_name || !req.body.category_img) {
            return res.status(400).json({ error: "Category name and image are required" });
        }
        if (typeof req.body.category_name !== "string") {
            return res.status(400).json({ error: "Category name must be a string" });
        }
        if (typeof req.body.category_img !== "string") {
            return res.status(400).json({ error: "Category image must be a string" });
        }
        const category = await prisma.category.create({
            data: {
                category_name: req.body.category_name,
                category_img: req.body.category_img
            }
        });
        res.status(201).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
    finally {
        await prisma.$disconnect();
    }
}

module.exports = addCategory
