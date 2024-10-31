const { sequelize, Model, DataTypes } = require("../db/connection");

class Comment extends Model {}

Comment.init(
  {
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "comment",
  }
);

module.exports = Comment;
