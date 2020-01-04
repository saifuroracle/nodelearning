var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var port = 8080;
var db = "mongodb://localhost/mongodblearning";
const options = {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
};
// models
var books = require("./model/Book.model");

// db connect
mongoose.connect(db, options)
    .then(() => console.log("💻 Mondodb Connected"))
    .catch(err => console.error(err));

app.get("/", (req, res) => {
    res.send("Hello world !");
});

app.listen(port, function() {
    console.log('app listening on port ' + port);
});