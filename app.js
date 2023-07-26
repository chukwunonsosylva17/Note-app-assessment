const express = require("express");
const mongooseconnectionDb = require("./config/dbConnection");
mongooseconnectionDb()

const routes = require('./routes/index');
const errorHandler = require("./middlewares/errorHandler")
const app = express();
const  basePath ='/api/'
app.use(express.json()); 

app.use(`${basePath}/notes`, require("./routes/index"));

app.use(errorHandler);


module.exports = app;