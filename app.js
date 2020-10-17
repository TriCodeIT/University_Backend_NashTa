var express = require('express');

const cors = require("cors");

var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
