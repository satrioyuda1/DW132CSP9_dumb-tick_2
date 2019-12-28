const jwt = require('jsonwebtoken');
const User = require('../models').user;

exports.signUp = (req, res) => {
	const { username, email } = req.body;
	User.findAll({
		where: { username }
	}).then((user) => {
		if (user.length > 0) {
			res.status(500).json({
				error: true,
				message: 'username already regsistered'
			});
		} else {
			User.findAll({
				where: { email }
			})
				.then((user) => {
					if (user.length > 0) {
						res.status(500).json({
							error: true,
							message: 'email has been registered'
						});
					} else {
						User.create({
							name: req.body.name,
							username: req.body.username,
							email: req.body.email,
							password: req.body.password,
							image: req.body.image,
							no_telp: req.body.no_telp
						}).then((user) => {
							const token = jwt.sign({ id: user.id, username: user.username }, 'kuncirahasia');
							res.status(201).json({
								message: `Success Sign Up New User`,
								token
							});
						});
					}
				})
				.catch((err) => {
					rest.status(500).json({
						message: err.message
					});
				});
		}
	});
};

exports.login = (req, res) => {
	const { email, username, password } = req.body;
	User.findOne({
		where: { email, username, password }
	})
		.then((user) => {
			if (user) {
				const token = jwt.sign({ id: user.id, username: user.username }, 'kuncirahasia');
				if (token) {
					res.status(200).json({
						message: 'success login',
						userId: user.id,
						username: user.username,
						token
					});
				}
			} else {
				res.status(401).json({
					error: true,
					message: 'Wrong email or password'
				});
			}
		})
		.catch((err) => {
			res.status(401).json({
				meesage: err.message
			});
		});
};

exports.showProfile = (req, res) => {
	const id = req.params.id;
	User.findOne({
		where: { id: id },
		attributes: { exclude: [ 'password', 'createdAt', 'updatedAt' ] }
	}).then((data) => res.send(data));
};
