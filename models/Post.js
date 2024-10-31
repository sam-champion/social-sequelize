const { sequelize, Model, DataTypes } = require("../db/connection");

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "post",
  }
);

module.exports = Post;
