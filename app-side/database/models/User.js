'use strict';
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(10)
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull:false
    },
    password: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    admin: {
      type: Sequelize.BOOLEAN(),
      allowNull:false
    }
  }, {
    tablename: 'Users',
    timestamps: true
  });

  User.associate = function(models) {

    User.hasMany(models.Application, {
      as: 'apps',
      foreignKey: 'user_id'
  });
  User.hasMany(models.Order, {
    as: 'order',
    foreignKey: 'user_id'
});
  
  };
  
  return User;
};