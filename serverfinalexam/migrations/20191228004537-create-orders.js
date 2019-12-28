'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('orders', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			eventId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'events',
					key: 'id'
				},
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
					key: 'id'
				},
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			quantity: {
				type: Sequelize.INTEGER
			},
			totalprice: {
				type: Sequelize.INTEGER
			},
			status: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('orders');
	}
};
