'use strict';
module.exports = (sequelize, DataTypes) => {
	const orders = sequelize.define(
		'orders',
		{
			userId: DataTypes.INTEGER,
			eventId: DataTypes.INTEGER,
			quantity: DataTypes.INTEGER,
			totalprice: DataTypes.INTEGER,
			status: DataTypes.STRING
		},
		{}
	);
	orders.associate = function(models) {
		// associations can be defined here
		orders.belongsTo(models.events, {
			foreignKey: 'eventId',
			as: 'eventOrder',
			sourceKey: 'id'
		});
		orders.belongsTo(models.user, {
			foreignKey: 'userId',
			as: 'orderUser',
			sourceKey: 'id'
		});
	};
	return orders;
};
