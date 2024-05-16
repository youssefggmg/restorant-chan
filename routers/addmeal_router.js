const express = require("express");
const bodyParser = require('body-parser');
const app = express()
app.use(express.json())

const {addmeal,addmealpage} =require("../controllers/addmeal_controller")


const mealrouter = express.Router()
//
mealrouter.use(bodyParser.urlencoded({ extended: true }));
mealrouter.use(bodyParser.json());
//
mealrouter.route("/addmeal")
    .get(addmealpage)


mealrouter.route("/addmeals")
    .post(addmeal)

    module.exports = mealrouter