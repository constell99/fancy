const User = require('../models/User');

const add = async (data) => {

};

const updateById = async (id) => {

};

const deleteById = async (id) => {

};

const findById = async (id) => {
	console.log('id = ' + id);
	let user;

	try {
		user = await User.findOne({id: id});

	} catch (err) {
		console.log(err);
	}

	return user;
};

module.exports = {
	add,
	updateById,
	deleteById,
	findById
}