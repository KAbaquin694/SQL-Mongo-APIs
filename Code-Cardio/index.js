// initializing packages from npm
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
/**
 * 1. register view engine
 * 2. define path to view engine
 * 3. tell expressJS what template engine to use
 */

// app.engine()
app.set('views', path.join(__dirname, 'views')); // 2
app.set('view engine', 'ejs'); // 3

/**
 * server configuration
 */

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// gives client access to static files
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes / Controller 
 */

//  const homeController = required('./controllers/home')
//  app.use('/', indexRouter);

/**
 * start server
 */
app.listen(777);