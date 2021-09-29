const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Pet"finder" model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
    {
      ColumnOne: {
        type: DataTypes.STRING.BINARY,
        defaultValue: "Picture"
      },
      ColumnTwo: {
        type: DataTypes.STRING,
        defaultValue: "Gender"
      },
      ColumnThree: {
        type: DataTypes.STRING,
        defaultValue: "Age"
      },
      ColumnFour: {
        type: DataTypes.STRING,
        defaultValue: "Size"
      },
      ColumnFive: {
        type: DataTypes.STRING,
        defaultValue: "Contact Details"
      },
      ColumnSix: {
        type: DataTypes.STRING,
        defaultValue: "Breed"
      },
      ColumnSeven: {
        type: DataTypes.STRING,
        defaultValue: "Attributes"
      },
      post_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );
  module.exports = Post;