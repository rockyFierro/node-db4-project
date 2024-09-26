const router = require('express').Router();
const Recipe = require('./recipe-model');
 
router.get('/:recipe_id',
  (req,res,next) => {
    Recipe.getRecipeById(req.params.recipe_id)
      .then(resource => {
        res.json(resource);
      })
      .catch(next);
  });



//// the pit ///////

  router.use( 
    (err,req,res,next) => { //eslint-disable-line
      res.json({
        customMessage: "\nIt's dangerous to go alone;\n take this chance to visit stackOverflow",
        message: err.message,
        stack: err.stack
      });
  });

module.exports = router;