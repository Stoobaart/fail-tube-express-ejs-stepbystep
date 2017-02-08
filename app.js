var express = require('express');
var app = express();
var layouts = require("express-ejs-layouts");
var bodyParser = require("body-parser");

var router = require("./config/routes");

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false} ));

app.use(layouts);

app.use(router);

app.listen(port, function() {
	console.log("FailTube is live and listening on port " + port);
});