const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Pet"finder" model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
    {
      columnone: {
        type: DataTypes.STRING.BINARY,
        defaultValue: "Picture"
      },
      columntwo: {
        type: DataTypes.STRING,
        defaultValue: "Gender"
      },
      columnthree: {
        type: DataTypes.STRING,
        defaultValue: "Age"
      },
      columnfour: {
        type: DataTypes.STRING,
        defaultValue: "Size"
      },
      columnfive: {
        type: DataTypes.STRING,
        defaultValue: "Contact Details"
      },
      columnsix: {
        type: DataTypes.STRING,
        defaultValue: "Breed"
      },
      columnseven: {
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