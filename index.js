const express = require("express");
const app = express();
const ejs = require("ejs");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const fs = require("fs")
const os = require ("os")


app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


const logPath = "./request_logs.txt";

app.use(async (req, res, next) => {
    const logEntry = `Time: ${new Date().toISOString()}
    IP Address: ${req.ip}
    OS Name: ${os.type()}
    Machine Architecture: ${os.arch()}
    Method: ${req.method}
    URL: ${req.originalUrl}
    Headers: ${JSON.stringify(Object.keys(req.headers))}
    Body: ${JSON.stringify(req.body)}
    -------------------------
    `;

    try {
    await new Promise((resolve, reject) => {
      fs.appendFile(logPath, logEntry, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  } catch (error) {
    console.error("Error writing to log file:", error);
  }

  next();
});



const homeRouter = require("./routers/home_router");
const mealrouter = require("./routers/addmeal_router");
const aboutrouter = require("./routers/about_router");
const chefRouter = require("./routers/addchif_controler")
const contactrout = require("./routers/contact_router")
const newsrouter = require("./routers/newsletter_router")

app.use(mealrouter);
app.use(homeRouter);
app.use(aboutrouter);
app.use(chefRouter);
app.use(contactrout);
app.use(newsrouter);

// Middleware to handle unmatched routes
app.use((req, res) => {
    // Render the 404 page
    res.status(404).render("404");
});

app.listen(8080, () => {
    console.log("it's running on port 8080");
});