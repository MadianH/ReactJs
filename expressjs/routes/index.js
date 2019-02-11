var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// res JSON
router.get('/result', function(req, res, next) {
  let result = req.query.result
  res.json({ result: result });
});

// Méthode GET
router.get('/get', function(req, res, next) {
  console.log(req.query);
});

// Méthode POST
router.post("/post", function(req, res) {
  console.log( req.body );
});

// Méthode PUT
router.put("/put", function(req, res) {
  console.log( req.query );
});

// Méthode DELETE
router.delete("/delete", function(req, res) {
  console.log( req.query );
});


module.exports = router;
