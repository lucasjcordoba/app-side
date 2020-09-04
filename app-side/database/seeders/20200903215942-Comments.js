'use strict';
let faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const orders = await queryInterface.sequelize.query('SELECT id FROM Orders;', { type: Sequelize.QueryTypes.SELECT });
    
    var comments = [];

    for(let i = 0; i < 30; i++){
      comments.push({
        rating:faker.random.number(10),
        comment: faker.lorem.words(50),
        order_id: faker.random.arrayElement(orders).id,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
      });

    }
    await queryInterface.bulkInsert('Comments', comments, {});
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
