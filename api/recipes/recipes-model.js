const db = require('../../data/db-config');
// const getAll = () => {
//     return 'getAll';
// };

const getById = (recipe_id) => {
    const bob = db('recipes')
        .select('rs.step_id', 'rs.step_num', 'rs.step_instructions', 'i.*')
        .leftJoin('recipe_steps as rs', 'r.recipe_id', '=', 'rs.step_id')
        .join('step_ingredients as si', 'rs.step_id', '=', 'si.step_id')
        .join('ingredients as i', 'si.ingredient_id', '=', 'i.ingredient_id')
        .where('r.recipe_id', recipe_id)
        .groupBy('r.recipe_id')
        .orderBy('r.recipe_id');
    console.log(bob);

    return bob;

};

// select r.*, 
// rs.step_id, 
// rs.step_num, 
// rs.step_instructions,
// i.*
// from recipes as r
// left join recipe_steps as rs on r.recipe_id = rs.step_id
// join step_ingredients as si on rs.step_id = si.step_id
// join ingredients as i on si.ingredient_id = i.ingredient_id
// where r.recipe_id = rs.recipe_id

// group by r.recipe_id
// order by r.recipe_id



// const create = () => {
//     return 'create';
// };

module.exports = {
    getById
};