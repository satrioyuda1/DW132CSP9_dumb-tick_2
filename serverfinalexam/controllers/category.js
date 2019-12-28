const Categories = require('../models').category;
const Events = require('../models').events;
const Users = require('../models').user;

exports.index = (req, res) => {
	Categories.findAll(req.body).then((data) => res.send(data));
};
