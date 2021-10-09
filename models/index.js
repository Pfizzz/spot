const User = require('./user');
const Pet = require("./pet");

// create associations
User.hasMany(Pet, {
    foreignKey: 'user_id'
});

Pet.belongsTo(User, {
    foreignKey: 'user_id',
  });

module.exports = { User, Pet};