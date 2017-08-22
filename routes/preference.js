const express = require('express');
const router = express.Router();

const service = require('../services/preferenceService');

router.post('/update', async (req, res, next) => {
	const userId = (req.session.me && req.session.me.id) || '';
	const data = req.body;
	data.user_id = userId;

	if (!userId) {
		res.status(403).json({
			status: 'failed',
			message: 'not logined'
		});

		return;
	}

	const preferences = await service.upsert(userId, data);

	res.json({
		status: 'ok',
		preferences
	});
});

module.exports = router;