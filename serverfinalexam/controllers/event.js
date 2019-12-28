const Events = require('../models').events;
const Categories = require('../models').category;
const Users = require('../models').user;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.search = (req, res) => {
	console.log(req.query);

	Events.findAll({
		where: {
			[Op.or]: [
				{
					title: {
						[Op.like]: `%${req.query.title}%`
					}
				},
				{
					starttime: {
						[Op.like]: req.query.starttime
					}
				}
			]
		},
		attributes: {
			exclude: [ 'createdBy' ]
		}
	}).then((data) => res.send(data));
};

exports.showEvents = (req, res) => {
	const id = req.params.id;
	Events.findAll({
		where: { id: id },
		include: [
			{
				model: Categories,
				as: 'category',
				attributes: [ 'id', 'name' ]
			},
			{
				model: Users,
				as: 'createdby'
			}
		]
	}).then((data) => res.send(data));
};
exports.showCategoryEvents = (req, res) => {
	const id = req.params.id;
	Events.findAll({
		where: { categoryId: id },
		include: [
			{
				model: Categories,
				as: 'category',
				attributes: [ 'id', 'name' ]
			},
			{
				model: Users,
				as: 'createdby'
			}
		]
	}).then((data) => res.send(data));
};
exports.index = (req, res) => {
	Events.findAll(req.body).then((data) => res.send(data));
};

exports.addEvent = (req, res) => {
	let request = {
		createdBy: req.userId,
		title: req.body.title,
		categoryId: req.body.categoryId,
		starttime: new Date(),
		endtime: new Date(),
		description: req.body.description,
		image: req.body.image,
		price: req.body.price,
		addres: req.body.addres,
		urlmap: req.body.urlmap,
		image: req.body.image,
		createdAt: new Date(),
		updatedAt: new Date()
	};
	Events.create(request)
		.then((response) => {
			res.status(200).json({
				message: 'add event succsess'
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: err.message
			});
		});
};

// exports.showEventsId=(req,res)=>{
//     const id = req.params.id
//     e
// }
