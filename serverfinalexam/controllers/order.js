const Categories = require('../models').category;
const Events = require('../models').events;
const Users = require('../models').user;
const Order = require('../models').orders;

exports.addOrder = (req, res) => {
	console.log(req.userId);
	let request = {
		userId: req.userId,
		eventId: req.body.eventId,
		quantity: req.body.quantity,
		totalprice: req.body.totalprice,
		status: req.body.status,
		createdAt: new Date(),
		updatedAt: new Date()
	};
	console.log(request);
	Order.findOne({
		where: {
			userId: request.userId,
			eventId: request.eventId
		}
	}).then((order) => {
		if (order) {
			res.status(400).json({
				message: 'cannot order again'
			});
		} else {
			Order.create({
				request
			}).then((data) => {
				if (data) {
					Order.findAll({
						include: [
							{
								model: Event,
								as: 'orderEvents',
								attributes: {
									exclude: [ 'createdAt', 'updatedAt' ]
								}
							},
							{
								model: Users,
								as: 'userOrder',
								attributes: {
									exclude: [ 'createdAt', 'updatedAt' ]
								}
							}
						]
					}).then((data) => {
						res.send(getCheckin(data));
					});
				} else {
					res.status(400).json({ message: 'No checkin was added' });
				}
			});
		}
	});
};
