'use strict';
var Mongoose = require('mongoose');

var product = require('./shared/product'),
	address = require('./address'),
	phone = require('./shared/phone');

var schema = Mongoose.Schema({
	customer: {type: Mongoose.Schema.Types.ObjectId, ref: 'Customer'},

	shipping: address,
	billing: address
	
	shippingPhone: phone,
	billingPhone: phone,

	items: [{
			quantity: {type: Number, min: 1, default: 1},
			product: product
		}],

	subtotal: {type: Number, min: 0, precision: 2},
	tax: {type: Number, min: 0, default: 0.07},
	total: {type: Number, min: 0, precision: 2},

	status: {type: String, enum: ['pending', 'shipped', 'billed', 'completed'], default: 'pending'},

	createdAt: {type: Date, required: true, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});

// TODO: totals and payment

module.exports = Mongoose.model('Order', schema);


