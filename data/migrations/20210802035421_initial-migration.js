
exports.up = async function (knex) {
  await knex.schema.createTable('recipes', table => {
    table.increments();
    table.string('recipe_name', 200).notNullable().unique();
  });
  await knex.schema.createTable('ingredients', table => {
    table.increments('ingredient_id');
    table.string('ingredient_name', 250).notNullable().unique();
    table.string('ingredient_unit', 50);
  });
  await knex.schema.createTable('steps', table => {
    table.increments();
  });
  await knex.schema.createTable('step_ingredients', table => {
    table.increments();
  });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
