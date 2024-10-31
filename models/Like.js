const { sequelize, Model, DataTypes } = require("../db/connection");

class Like extends Model {}

Like.init(
  {
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "like",
  }
);

module.exports = Like;
