'use strict';
let faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const applications = await queryInterface.sequelize.query('SELECT id FROM Applications;', { type: Sequelize.QueryTypes.SELECT });
    const users = await queryInterface.sequelize.query('SELECT id FROM Users;', { type: Sequelize.QueryTypes.SELECT });
    var orders = [];

    for(let i = 0; i < 30; i++){
      orders.push({
        user_id: faker.random.arrayElement(users).id,
        application_id: faker.random.arrayElement(applications).id,
        rating:faker.random.number(10),
        comment: faker.lorem.words(50),
        price: faker.random.number(100000),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
      });
    }
    await queryInterface.bulkInsert('Orders', orders, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};