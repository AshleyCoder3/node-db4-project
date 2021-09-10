exports.seed = function (knex) {
  return knex('step_ingredients').insert([
    { quantity_id: 1, step_id: 1, ingredient_id: 1, quantity: 3.0 },
    { quantity_id: 2, step_id: 2, ingredient_id: 2, quantity: 1.0 },
    { quantity_id: 4, step_id: 4, ingredient_id: 3, quantity: 1.0 }
  ]);
};
