const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const arr = ['admin', 'user-1', 'user-2'];

app.get('/', (req, res) => res.render('index', { arr: arr }));
app.get('/create', (req, res) => res.render('create'));
app.post('/create', (req, res) => {
  arr.push(req.body.role);
  res.redirect('/');
});

module.exports = app;