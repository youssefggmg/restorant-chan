const express = require("express");
const bodyParser = require('body-parser');
const addCategory = require("../controllers/category_controler");
const app = express()
app.use(express.json())

const Categoryrout = express.Router()

Categoryrout.route("/addcategory").post(addCategory)