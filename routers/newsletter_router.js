const express = require("express");
const bodyParser = require('body-parser');
const app = express()
app.use(express.json())

const newUser = require("../controllers/newsletter_controller")
const newsrouter = express.Router()

//
newsrouter.use(bodyParser.urlencoded({ extended: true }));
newsrouter.use(bodyParser.json());
//

newsrouter.route("/newsl").post(newUser)


module.exports =newsrouter