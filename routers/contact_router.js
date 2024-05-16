const express = require("express");
const contactpage = require("../controllers/contact_controller");
const app = express()
app.use(express.json())

const contactrout = express.Router()

contactrout.route("/contact").get(contactpage)

module.exports = contactrout