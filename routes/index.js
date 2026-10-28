var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/f90', function(req, res, next) {
    res.render('bmw', {
        title: "M5 f90",
        picture: "images/f90.png",
        desc: "BMW M5 F90 (2017-2024)— спортивный седан с 4,4‑литровым V8 и турбонаддувом, развивающим до 625 л.с.Модель отличается стремительным разгоном (до 100 км/ч за 3,3 с)  и сочетанием гоночной динамики с комфортом премиального седана."
    });
});

router.get('/f10', function(req, res, next) {
   res.render('bmw', {
        title: "M5 f10",
        picture: "images/f10.png",
        desc: "BMW M5 F10 (2011–2017) — седан с 4,4‑л битурбо V8 (560–575 л.с.), задним приводом и 7‑ст. роботом M‑DCT. Разгон до 100 км/ч — 4,4 с, макс. скорость — 250 км/ч (с пакетом M Driver’s — 305 км/ч). Выделяется спортивным обвесом M, адаптивной подвеской и карбон‑керамическими тормозами (опция)."
    });
});

router.get('/f13', function(req, res, next) {
   res.render('bmw', {
        title: "M6 f13",
        picture: "images/f13.png",
        desc: "BMW M6 F13 в кузове кабриолет (2012–2015) — двухдверный спорткар с 4,4‑л битурбо V8 (560 л. с.), 7‑ступенчатым «роботом» и задним приводом; разгоняется до 100 км/ч за 4,2–4,3 с, максимальная скорость — 250 км/ч (с пакетом M Driver’s — 305 км/ч); отличается складной крышей, карбоновыми элементами, активным дифференциалом "
    });
});
module.exports = router;