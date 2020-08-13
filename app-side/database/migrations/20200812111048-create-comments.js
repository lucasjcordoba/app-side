'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      order_id : {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'Orders'
            },
            key: 'id'
          }
    },
    rating: {
      type:Sequelize.DECIMAL(2,1),
      allowNull: false
    },
    content: {
      type: Sequelize.STRING(1000),
      allowNull: false
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Comments');
  }
};