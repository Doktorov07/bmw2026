const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2026');

var Model = require('./models/model.js').Model

var car = new Model({
    title: "M3 E30",
    nick: "m3e30",
})

car.save();
