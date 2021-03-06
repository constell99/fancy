const mongoose = require('mongoose');
const db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => {
	console.log('Connected to mongod sever');
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/fancy');