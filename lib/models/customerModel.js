'use strict';
var Mongoose = require('mongoose');

var address = require('./shared/address'),
	phone = require('./shared/phone');

var schema = new Mongoose.Schema({
	name: {
		first: {type: String, required: true},
		last: {type: String, required: true}
	},

	email: {type: String, required: true, unique: true, lowercase: true},
	password: {type: String, required: true, minLength: 6},

	addresses: [address],
	phones: [phone],

	active: {type: Boolean, default: true},

	createdAt: {type: Date, required: true, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});

// TODO: full name:


module.exports = Mongoose.model('Customer', schema);


