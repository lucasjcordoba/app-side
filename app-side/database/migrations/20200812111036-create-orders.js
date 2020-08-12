'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      user_id : {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'Users'
            },
            key: 'id'
          }
    },
      application_id : {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'Applications'
          },
          key: 'id'
        }
  },
      price: {
       type: Sequelize.DECIMAL(10,2),
    allowNull: false
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};