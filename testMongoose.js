const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2026');

var schema = mongoose.Schema({ name: String })

schema.methods.meow = function(){
  console.log(this.name + " сигналит")
}

const Model = mongoose.model('Model', schema);

const m3 = new Model({ name: 'M3 E30' });

m3.save().then(() => m3.meow());
