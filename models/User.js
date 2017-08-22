const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const userSchema = new Schema({
	id: {
		type: String,
		unique: true
	},
	name: {
		type: String,
		required: 'name required',
		unique: true
	}
});

module.exports = mongoose.model('user', userSchema);