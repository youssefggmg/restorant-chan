const express = require("express");
const app = express()
app.use(express.json())

const {homepage} = require("../controllers/home_controller")

const homeRouter = express.Router()


// homeRouter.route("/indexs")
//     .get(showmeal)
//     .get(allchefs)

    homeRouter.route("/index")
    .get(homepage)

    // homeRouter.route("/addchef")
    // .post(addchef)

module.exports = homeRouter