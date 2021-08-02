
exports.up = async function (knex) {
  await knex.schema.createTable('recipes', table => {
    table.increments();
  });
  await knex.schema.createTable('ingredients', table => {
    table.increments();
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
