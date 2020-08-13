'use strict';
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(10)
    },
    name: {
      type: Sequelize.STRING(100)
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull:false
    },
    password: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
  }, {
    tablename: 'Users',
    timestamps: true
  });

  User.associate = function(models) {

    User.hasMany(models.Application, {
      as: 'application',
      foreignKey: 'user_id'
  });
  User.hasMany(models.Order, {
    as: 'oreder',
    foreignKey: 'user_id'
});
  
  };
  
  return User;
};