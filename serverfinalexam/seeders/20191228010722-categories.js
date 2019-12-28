'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'categories',
			[
				{
					name: 'Concerts',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: 'Movies',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: 'Seminar',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					name: 'Sports',
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		Example: return queryInterface.bulkDelete('categories', null, {});
	}
};
