var express = require('express');
const todos = require('../models/todos');
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

router.delete('/todos/:idx', function (req, res) {
  todosList.splice(req.params.idx, 1);
  res.redirect('/');
})

module.exports = router;
