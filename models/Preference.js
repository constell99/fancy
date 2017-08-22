const mongoose = require('mongoose');
const autoIncrement = require('mongodb-autoincrement');
const Schema = mongoose.Schema;

autoIncrement.setDefaults({
	collection: 'counters',
	field: 'id',
	step: 1
});

const preferenceSchema = new Schema({
	id: {
		type: Number,
		required: false
	},
	user_id: String,
	language: {
		type: String,
		enum: [ 'english', 'swedish', 'thai', 'korean' ],
		required: [ true, 'language required' ] 
	},
	timezone: {
		type: String
	},
	currency: {
		type: String,
		enum: [ 'USD', 'SEK', 'THB', 'KRW' ],
		required: [ true, 'currency required' ]
	},
	profile_visibility: Boolean,
	messages: {
		type: String,
		enum: [ 'everyone', 'follow', 'no' ],
		required: [ true, 'messages required' ]
	},
	category_list: {
		type: Boolean,
		required: [ true, 'category list required']
	}
});

preferenceSchema.plugin(autoIncrement.mongoosePlugin);

module.exports = mongoose.model('preference', preferenceSchema);