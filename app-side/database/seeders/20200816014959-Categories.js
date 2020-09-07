'use strict';
let faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let categories = [];

    for(let i = 0; i < 5; i++){
      categories.push({
        name: faker.name.firstName(),
        img: faker.image.business(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
      });
    }
    await queryInterface.bulkInsert('Categories', categories, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
