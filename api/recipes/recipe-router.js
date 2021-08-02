const router = require('express').Router();

router.use('*',
  (req, res) => {
    res.json({
      api: 'alive'
    });
  });

  router.use( 
    (err,req,res,next) => { //eslint-disable-line
      res.json({
        customMessage: "\nIt's dangerous to go alone;\n take this chance to visit stackOverflow",
        message: err.message,
        stack: err.stack
      });
  });

module.exports = router;