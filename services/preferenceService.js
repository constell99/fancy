const Preference = require('../models/Preference');


async function add (data) {
	const preference = new Preference(data);
	const error = preference.validateSync();

	if (error) {
		throw new Error('validation failed');
	}

	return await preference.save((err, obj));
};

async function upsert (userId, data) {
	const preference = new Preference(data);

	return await Preference.findOneAndUpdate(
		{ user_id: userId },
		data
	);
};

async function deleteById (id) {
	
};

async function findOneByUserId (userId) {
	return await Preference.find({ user_id: userId });
};

module.exports = {
	add,
	upsert,
	deleteById,
	findOneByUserId
}