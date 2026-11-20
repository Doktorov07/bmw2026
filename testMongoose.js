const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2026');

const Model = mongoose.model('Model', { name: String });

const m5 = new Model({ name: 'M5 F90' });

m5.save().then(() => console.log('Бип'));