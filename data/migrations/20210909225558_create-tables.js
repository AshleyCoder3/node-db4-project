exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments('recipe_id');
            tbl.string('recipe_name', 150).notNullable();
            tbl.timestamp('created_at').defaultTo(knex.fn.now());
        })
        .createTable('ingredients', tbl => {
            tbl.increments('ingredient_id');
            tbl.string('ingredient_name', 100).notNullable();
        })
        .createTable('recipe_steps', tbl => {
            tbl.increments('step_id');
            tbl.integer('step_num');
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.string('step_instructions', 250);
        })
        .createTable('step_ingredients', tbl => {
            tbl.increments('quantity_id');
            tbl.decimal('quantity', null);
            tbl.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('recipe_steps')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        });
};

exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('step_ingredients')
        .dropTableIfExists('recipe_steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
