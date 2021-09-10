exports.seed = function (knex) {
  return knex('recipe_steps').insert([
    { step_id: 1, step_num: 1, step_instructions: 'boil water', recipe_id: 1 },
    { step_id: 2, step_num: 2, step_instructions: 'once boiling add pasta', recipe_id: 1 },
    { step_id: 3, step_num: 3, step_instructions: 'drain pasta when done', recipe_id: 1 },
    { step_id: 4, step_num: 4, step_instructions: 'add cheese to pasta', recipe_id: 1 },
    { step_id: 5, step_num: 5, step_instructions: 'eat and enjoy', recipe_id: 1 }
  ]);
};
