'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'orders',
			[
				{
					userId: 1,
					eventId: 3,
					quantity: 2,
					totalprice: 20000,
					status: 'pending',
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('orders', null, {});
	}
};
