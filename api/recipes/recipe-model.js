function getRecipeById(recipe_id) {
  return Promise.resolve(`recipe id is ${recipe_id}`);
}

module.exports = { getRecipeById };