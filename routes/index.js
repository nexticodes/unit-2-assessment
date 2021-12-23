var express = require('express');
var router = express.Router();

var todosList = require('../models/todos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {todosList});
});

router.post('/todos', function (req, res) {
  req.body.done = false;
  todosList.push(req.body);
  res.redirect('/')
})

module.exports = router;
