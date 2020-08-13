'use strict';
module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define('Comment', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(10)
    },
    rating: {
      type:Sequelize.DECIMAL(2,1),
      allowNull: false
    },
    content: {
      type: Sequelize.STRING(1000),
      allowNull: false
      },
  }, {
    tablename: 'Comments',
    timestamps: true
  });

  return Comment;
};