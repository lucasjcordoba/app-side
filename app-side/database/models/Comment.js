'use strict';
module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define('Comment', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(10)
    },
    order_id: {
      type: Sequelize.INTEGER(10),
      allowNull: false
    },
    content: {
      type: Sequelize.INTEGER(10),
      allowNull: false
    },
    rating: {
      type: Sequelize.DECIMAL(5, 2),
      allowNull: false
    },
  }, {
    tablename: 'Comments',
    timestamps: true
  });

  Comment.associate = function (models) {

  
    Comment.belongsTo(models.Order, {
      as: 'comments',
      foreignKey: 'order_id'
    })

  }

  return Comment;
};