require('express-async-errors');
const dotenv = require("dotenv").config();   
const app = require("./app");

const port = process.env.PORT || 6000;
app.listen(port,() => { 
    console.log(`Server is listening on port ${port}`);
});