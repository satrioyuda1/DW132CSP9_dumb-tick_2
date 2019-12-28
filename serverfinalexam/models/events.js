'use strict';
module.exports = (sequelize, DataTypes) => {
	const events = sequelize.define(
		'events',
		{
			createdBy: DataTypes.INTEGER,
			title: DataTypes.STRING,
			categoryId: DataTypes.INTEGER,
			starttime: DataTypes.DATE,
			endtime: DataTypes.DATE,
			description: DataTypes.STRING,
			price: DataTypes.INTEGER,
			addres: DataTypes.STRING,
			urlmap: DataTypes.STRING,
			image: DataTypes.STRING
		},
		{}
	);
	events.associate = function(models) {
		// associations can be defined here
		events.belongsTo(models.category, {
			foreignKey: 'categoryId',
			as: 'category',
			sourceKey: 'id'
		});
		events.belongsTo(models.user, {
			foreignKey: 'createdBy',
			as: 'createdby',
			sourceKey: 'id'
		});
		events.hasMany(models.orders, {
			foreignKey: 'eventId',
			as: 'event'
		});
	};
	return events;
};
