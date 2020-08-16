'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      description: {
          type: Sequelize.STRING(1000),
          allowNull: false
      },
      image_url: {
          type: Sequelize.STRING(500),
          allowNull: false
      },
      price: {
          type: Sequelize.DECIMAL(10,2),
          allowNull: false
      },
      category_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'Categories'
              },
              key: 'id'
            }
          },
      user_id : {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'Users'
              },
              key: 'id'
            }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Applications');
  }
};