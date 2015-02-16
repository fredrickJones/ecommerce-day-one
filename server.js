'use strict';
var Express = require('express'),
	BodyParser = require('body-parser'),
	Mongoose = require('mongoose'),
	Migrate = require('migrate');

var	customer = require('./lib/models/customerModel'),
	product = require('./lib/models/productModel');

var port = 9099;
var mongoUri = 'mongodb://localhost:/ecommerce';
var app = Express();


Mongoose.connect(mongoUri);
var connection = Mongoose.connection;

connection.once('open', function() {
	console.log('connected to db at ' + mongoUri);
});

connection.on('error', function() {
	console.log('error connecting to ' + mongoUri);
});


app.use(BodyParser.json());

app.listen(port, function() {
	console.log('listening on port ' + port);
});