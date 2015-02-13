'use strict';
var Mongoose = require('mongoose'),
	Address = require('./addressModel');
var Schema = Mongoose.Schema;

var customerSchema = new Schema({
	name: {type: String, required: true},
	email: {type: String, required: true, unique: true, lowercase: true},
	address: [Address.shipping],
	phones: [{
		home: {type: Number},
		cell: {type: Number, required: true},
		work: {type: Number}
	}],
	password: {type: String, required: true},
	active: {type: Boolean},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});



module.exports = Mongoose.model('Customer', customerSchema);




