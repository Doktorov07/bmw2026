var express = require('express');
var router = express.Router();
var Model = require('../models/model').Model;

/* GET models listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с models');
});

/* Страница модели */
router.get("/:nick", async function(req, res, next) {
  var models = await Model.find({nick: req.params.nick});
  console.log(models);
  if (!models.length) return next(new Error("Нет такой модели BMW"));
  var model = models[0];
  res.render('bmw', {
    title: model.title,
    picture: model.avatar,
    desc: model.desc
  });
});

module.exports = router;
