const router = require('express').Router();
const controllers = require('./controllers/controller');
const models = require('./models');
// var app = require('./app');

  router.get('/', controllers.controller.get)
  router.post('/', controllers.controller.post)

  router.put('/:index', controllers.controller.put)
  router.delete('/:index', controllers.controller.delete)

module.exports = router
