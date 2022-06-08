'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasMany(models.Post, { onDelete: 'cascade', hooks:true });
      models.User.hasMany(models.Like, { onDelete: 'cascade', hooks:true });
      models.User.hasMany(models.Comment, { onDelete: 'cascade', hooks:true });
    }
  }
  User.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: { type: DataTypes.STRING, defaultValue: '/images/users/avatar.png' },
    bio: DataTypes.STRING,
    admin: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};