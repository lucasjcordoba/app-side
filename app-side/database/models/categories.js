'use strict';
module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define('Category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(10)
    },
    name: {
      type: Sequelize.STRING(100)
    },
  }, {
    tablename: 'Categories',
    timestamps: true
  });
  

  Category.associate = function(models) {

    Category.hasMany(models.Application, {
      as: 'application',
      foreignKey: 'category_id'
  });
  
  };
  return Category;
};