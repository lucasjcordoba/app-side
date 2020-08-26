'use strict';
let faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = [];

    for(let i = 0; i < 30; i++){
      users.push({
        email: faker.internet.exampleEmail(),
        password: faker.internet.password(8),
        admin: faker.random.boolean(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
      });
    }
    await queryInterface.bulkInsert('Users', users, {});
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
