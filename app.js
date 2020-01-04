var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var port = 8080;
var db = "mongodb://localhost/mongodblearning";

// models
var books = require("./model/Book.model");

// db connect
mongoose.connect(db);

app.get("/", (req, res) => {
    res.send("Hello world !");
});

app.listen(port, function() {
    console.log('app listening on port ' + port);
});