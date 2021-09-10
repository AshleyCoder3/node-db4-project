
exports.seed = function (knex) {
  return knex('recipes').insert([
    { recipe_id: 1, recipe_name: 'mac and cheese' },
    { recipe_name: 'rowValue2' },
    { recipe_name: 'rowValue3' }
  ]);
};
