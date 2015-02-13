'use strict';
var Mongoose = require('mongoose'),
	Product = require('./productModel'),
	Address = require('./addressModel');
var Schema = Mongoose.Schema;

var orderSchema = new Schema({
	customer: {type: Mongoose.Schema.Types.ObjectId, ref: 'customerModel'},
	addresses: [{
		shipping: [Address.addressSchema.addresses.shipping],
		billing: [Address.addressSchema.addresses.billing]
	}],
	products: [Product.productSchema],
	db.Product.aggregate (
		[
			{$project: { subtotal: { $add: [ "$price"]}}},
			{}
		]
	),
	subtotal: [Product {$add: ['$price']}],
	salesTax: {},
	total: {},
	paymentInfo: [{
		cardHolder: {type: String, required: true},
		cardType: {type: String, required: true, enum: ['visa', 'american express', 'discover', 'master card']},
		cardNumber: {type: Number, required: true min: 16, max: 16},
		cardCode: {type: Number, required: true, min: 3, max: 4}
	}],
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
	status: {type: String, enum: ['lets get started', 'almost there', 'all done now']}
});

module.exports = Mongoose.model('Order', orderSchema);




