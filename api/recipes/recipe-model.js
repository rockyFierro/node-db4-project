const db = require('../../data/db-config');

async function getRecipeById(recipe_id) {
  const recipeR = await db('recipes as r')
    .where('recipe_id', recipe_id);

    return recipeR;
}

module.exports = { getRecipeById };