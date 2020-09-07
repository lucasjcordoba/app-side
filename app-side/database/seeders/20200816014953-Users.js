'use strict';
let faker = require('faker');
var bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = [];

    for(let i = 0; i < 2; i++){
      users.push({
        email: faker.internet.exampleEmail(),
        password: bcrypt.hashSync('12345678', 10),
        admin: faker.random.boolean(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
      });
    }
    await queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};