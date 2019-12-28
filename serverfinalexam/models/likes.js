'use strict';
module.exports = (sequelize, DataTypes) => {
  const likes = sequelize.define('likes', {
    userId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {});
  likes.associate = function(models) {
    // associations can be defined here
  };
  return likes;
};