'use strict';
let faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const categories = await queryInterface.sequelize.query('SELECT id FROM Categories;', { type: Sequelize.QueryTypes.SELECT });
    const users = await queryInterface.sequelize.query('SELECT id FROM Users;', { type: Sequelize.QueryTypes.SELECT });

    var applications = [];

    for(let i = 0; i < 1; i++){
      applications.push({
        name: faker.company.companyName(),
        description: faker.lorem.words(30),
        image_url: faker.image.business(),
        price: faker.random.number(20000),
        category_id: faker.random.arrayElement(categories).id,
        user_id: faker.random.arrayElement(users).id,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent()
      });

    }
    await queryInterface.bulkInsert('Applications', applications, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Applications', null, {});
  }
};
