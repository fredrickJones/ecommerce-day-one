paymentInfo: [{
		cardHolder: {type: String, required: true},
		cardType: {type: String, required: true, enum: ['visa', 'american express', 'discover', 'master card']},
		cardNumber: {type: String, required: true minLength: 16, maxLength: 16},
		cardCode: {type: String, required: true, minLength: 3, maxLength: 3}
	}],