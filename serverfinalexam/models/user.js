'use strict';
module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define(
		'user',
		{
			name: DataTypes.STRING,
			username: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			image: DataTypes.STRING,
			no_telp: DataTypes.INTEGER
		},
		{}
	);
	user.associate = function(models) {
		// associations can be defined here
		user.hasMany(models.events, {
			foreignKey: 'createdBy',
			as: 'event'
		});
		user.hasMany(models.orders, {
			foreignKey: 'userId',
			as: 'buyer'
		});
	};
	return user;
};
