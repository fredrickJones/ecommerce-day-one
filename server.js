'use strict';
var Express = require('express'),
	BodyParser = require('body-parser'),
	Mongoose = require('mongoose'),
	Customer = require('./lib/models/customerModel'),
	Product = require('./lib/models/productModel');

var App = Express();
var port = 9099;
var mongoUri = 'mongodb://localhost:/ecommerce';

Mongoose.connect(mongoUri);
Mongoose.connection.once('open', function() {
	console.log('connected to db at ' + mongoUri);
});

App.use(BodyParser.json());




App.listen(port, function() {
	console.log('listening on ' + port);
});