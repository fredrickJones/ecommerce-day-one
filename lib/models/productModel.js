'use strict';
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var productSchema = new Schema({
	name: {type: String, required: true},
	description: {type: String, required: true},
	price: {type: Number, required: true},
	active: {type: Boolean},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now}
});

module.exports = Mongoose.model('Product', productSchema);




