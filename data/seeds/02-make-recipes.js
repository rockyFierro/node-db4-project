const recipes = [
  { recipe_name: 'Butternut Squash' },
  { recipe_name: 'Tapioca' },
  { recipe_name: 'Shrimp Byarmi' },
];

const ingredients = [
  { ingredient_name: 'Shrimp', ingredient_unit: 'lbs' },
  { ingredient_name: 'Squash', ingredient_unit: 'lbs' },
  { ingredient_name: 'Apples', ingredient_unit: 'grams' },
  { ingredient_name: 'Yogurt', ingredient_unit: 'cups' },
  { ingredient_name: 'Crab', ingredient_unit: 'pinches' },
  { ingredient_name: 'Flour', ingredient_unit: 'yeets' },
];

const step_ingredients = [
  //squash
  {step_id: 2,ingredient_id: 2,quantity: 13},
  {step_id: 3,ingredient_id: 5,quantity: 99},
  //tapioca
  {step_id: 2,ingredient_id: 3,quantity:2 },
  {step_id: 3,ingredient_id: 1,quantity:23 },
  //shrimp
  {step_id: 1,ingredient_id: 6,quantity:41 },
]

const steps = [
  //butternut squash
  { step_text: 'Turn on oven', step_number: 1, recipe_id: 1 },
  { step_text: 'Add squash', step_number: 2, recipe_id: 1 },
  { step_text: 'mix crab', step_number: 3, recipe_id: 1 },
  //Tapioca
  { step_text: 'Preheat pan', step_number: 1, recipe_id: 2 },
  { step_text: 'Hide apples', step_number: 2, recipe_id: 2 },
  { step_text: 'Eat shrimp', step_number: 3, recipe_id: 2 },
  //Shrimp Byarmi
  { step_text: 'Anger flour', step_number: 1, recipe_id: 3 },
  { step_text: 'Light barbequeeuea', step_number: 2, recipe_id: 3 },
  { step_text: 'Order pizza', step_number: 3, recipe_id: 3 },
]

exports.seed = async function (knex) {
  await knex('recipes').insert(recipes);
  await knex('ingredients').insert(ingredients);
  await knex('steps').insert(steps);
  await knex('step_ingredients').insert(step_ingredients);
};