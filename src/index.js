"use strict";
const express = require("express"),
 bodyParser = require("body-parser"),
app = express();

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    next();
})
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
require("./all")(app);
app.listen(3001, () => {
    console.log("Service <Prueba> listening in the port:", 3001);
});