'use strict';
module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define('Order', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(10)
    },
    user_id: {
      type: Sequelize.INTEGER(10),
      allowNull: true
    },
    application_id: {
      type: Sequelize.INTEGER(10),
      allowNull: false
    },
    comment:{
      type: Sequelize.STRING(1000),
      allowNull: true
    },
    rating: {
      type: Sequelize.INTEGER(5,2),
      allowNull: true
    },
    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
  }, {
    tablename: 'Orders',
    timestamps: true
  });

  Order.associate = function (models) {

    Order.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id'
    });
    Order.belongsTo(models.Application, {
      as: 'applications',
      foreignKey: 'application_id'
    });

  }

  return Order;
};