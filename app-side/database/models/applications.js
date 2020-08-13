'use strict';
module.exports = (sequelize, Sequelize) => {
  const Application = sequelize.define('Application', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(10)
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull:false
    },
    image_url: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    description: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    price: {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false
    },
    category_id: {
      type: Sequelize.INTEGER(10),
      allowNull: false
    },
    user_id: {
      type: Sequelize.INTEGER(10),
      allowNull: false
    }
  }, {
    tablename: 'Applications',
    timestamps: true
  });


  Application.associate = function(models) {

    Application.belongsTo(models.Category, {
      as: 'category',
      foreignKey: 'category_id'
    });
    Application.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id'
    });

  }
  return Application;
};