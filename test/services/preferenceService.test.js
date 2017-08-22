/**
 * @jest-environment node
 */
const mongoose = require('mongoose');
const service = require('../../services/preferenceService');

beforeAll(async () => {
	await mongoose.connect('mongodb://localhost/fancy');
})

afterAll(() => {
	mongoose.disconnect();
});

describe('preference service test', () => {
	
	it('create preference', async (done) => {
		const testPreferenceDate = {
			user_id: 'test',
			language: 'english',
			timezone: '9:00',
			currency: 'USD',
			profile_visibility: true,
			messages: 'everyone',
			category_list: true 
		};

		await service.add(testPreferenceDate);
		done();
	});
});

