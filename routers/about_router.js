const express = require("express");
const app = express()
app.use(express.json())

const aboutpage= require("../controllers/about_controller")

const aboutrouter = express.Router()

aboutrouter.route("/about").get(aboutpage)


module.exports= aboutrouter