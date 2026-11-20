var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var data = require('./data.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// --- Настройка шаблонизатора с поддержкой layout (ejs-locals) ---
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// ----------------------------------------------------------------

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Подключение роутов
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Перехват 404 и передача в обработчик ошибок
app.use(function(req, res, next) {
  next(createError(404));
});

// Глобальный обработчик ошибок (должен быть ПОСЛЕ всех роутов)
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error', { title: 'BMW' });
});

// --- Заливка данных в MongoDB при старте сервера ---
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';

async function fillData() {
  let client;
  try {
    client = await new MongoClient(url).connect();
    const db = client.db('test2026');
    const collection = db.collection('models');

    const count = await collection.countDocuments();
    if (count === 0) {
      await collection.insertMany(data);
      console.log('Данные загружены в базу test2026');
    } else {
      console.log('Коллекция models уже заполнена:', count, 'документов');
    }
  } catch (err) {
    console.error('Ошибка загрузки данных:', err.message);
  } finally {
    if (client) await client.close();
  }
}
fillData();
// ---------------------------------------------------

module.exports = app;
