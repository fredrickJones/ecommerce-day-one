'use strict';

module.exports = {
	kind: {type: String, required: true, enum: ['Billing', 'Shipping', 'Both'], default: 'Both'},
	address: {type: String, required: true},
	address2: {type: String},
	city: {type: String, required: true},
	state: {type: String, required: true, maxLength: 2, uppercase: true, enum: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']},
	zip: {type: String, maxLength: 5, required: true},
	active: {type: Boolean, default: true}
};


