const foodData = require('../seed_data/food')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('food').del()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert(foodData);
    });
};
