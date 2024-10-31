const { sequelize, Model, DataTypes } = require("../db/connection");

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "user",
  }
);

module.exports = User;
