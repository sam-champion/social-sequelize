const { sequelize, Model, DataTypes } = require("../db/connection");

class Profile extends Model {}

Profile.init(
  {
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "profile",
  }
);

module.exports = Profile;
