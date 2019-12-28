'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'events',
			[
				{
					createdBy: 1,
					title: 'rai mantap2222',
					categoryId: 1,
					starttime: new Date(),
					endtime: new Date(),
					description: 'raisa mtap banget xixixiix',
					price: 200000,
					addres: 'tangsel',
					urlmap: 'wwww.',
					image: 'www.'
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('events', null, {});
	}
};
