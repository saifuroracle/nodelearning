var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

var port = 8080;

app.listen(port, function() {
    console.log('app listening on port ' + port);
});