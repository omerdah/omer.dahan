var http = require('http');
const express = require("express");
const bodyParser = require("body-parser");
const sql= require ("./DB/db.js");
const app = express();
const path = require("path");

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "oMyush435",
  DB: "mysql"
};

// parse requests of content-type: application/json
 app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));

const publicDirectory = path.join(__dirname+'./public');
app.use(express.static(publicDirectory));


// simple route
app.get("/", (req, res) => {
res.sendFile(path.join(__dirname+'/views/CV.html'));
});


// Create a route for getting all customers
app.get("/customers", function(req, res){
    sql.query("SELECT * FROM customers", (err, mysqlres) => {
    if (err) {
    console.log("error: ", err);
    res.status(400).send({message: "error in getting all customers: " + err}); return;
    }
                console.log("got all customers...");
                res.send(mysqlres);
                return;
    }); });

// set port, listen for requests 
app.listen(8000, () => {
console.log("Server is running on port 8000.");
});


// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var server = require('../MyFirstServer');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
