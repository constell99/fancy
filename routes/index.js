const express = require('express');
const router = express.Router();

const userService = require('../services/userService');

router.get('/', (req, res, next) => {
  res.render('index', {
  	username: req.session.me ? req.session.me.name || '' : ''
  });
});

router.post('/login', async (req, res, next) => {
	const user = await userService.findById('test');

	req.session.me = {
		id: user.id,
		name: user.name
	};

	res.json({
		status: 'ok',
		username: user.name,
	});
});

module.exports = router;
