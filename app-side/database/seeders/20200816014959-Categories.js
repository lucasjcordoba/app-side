'use strict';
let faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let categories = [];

    for(let i = 0; i < 30; i++){
      categories.push({
        name: faker.name.firstName(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
      });
    }
    await queryInterface.bulkInsert('Categories', categories, {});
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
