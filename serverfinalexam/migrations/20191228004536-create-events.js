'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('events', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			createdBy: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
					key: 'id'
				},
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			title: {
				type: Sequelize.STRING
			},
			categoryId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'categories',
					key: 'id'
				},
				onUpdate: 'cascade',
				onDelete: 'cascade'
			},
			starttime: {
				type: Sequelize.DATE
			},
			endtime: {
				type: Sequelize.DATE
			},
			description: {
				type: Sequelize.STRING
			},
			price: {
				type: Sequelize.INTEGER
			},
			addres: {
				type: Sequelize.STRING
			},
			urlmap: {
				type: Sequelize.STRING
			},
			image: {
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
		return queryInterface.dropTable('events');
	}
};
