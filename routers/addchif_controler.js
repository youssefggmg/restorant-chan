const express = require("express");
const addchef= require("../controllers/chef_controller")
const app = express()
app.use(express.json())

const chefRouter = express.Router();


chefRouter.route("/addchef").post(addchef)


module.exports = chefRouter 