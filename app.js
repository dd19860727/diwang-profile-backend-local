const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const expressValidator = require("express-validator");
const customValidators = require("./api/validator/customValidators");
const cors = require('cors');

const { loadErrors } = require('./api/middleware');
const {loadCorsConfig} = require('./api/middleware');

const root = '/api';
const views = 'api/views';
const {
       addResHeader,
       redirectToLogin, 
       loginRouter,
       apiRouter, 
       swaggerRouter} = require("./api/routers");

//Global Variable Config
dotenv.config({path:__dirname + '/global.env'});

//cross-domain
app.use(cors(loadCorsConfig));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//valiadation
app.use(expressValidator(customValidators.custom_validators));

//cookie-session
app.use(cookieParser());
app.use(session({secret:process.env.SECRET_KEY, saveUninitialized:false, resave:false}));

//EJS config
app.use(expressLayouts);
app.set('views', path.join(__dirname, views));
app.set('view engine', 'ejs');

//set static directorty
//app.use(express.static(path.join(__dirname, views+"/shared")));

//add custom response header
app.use(addResHeader);

// Routers which should handle requests
//app.use('/', redirectToSwagger);
app.use('/', redirectToLogin);
app.use(root, loginRouter);
app.use(root, swaggerRouter);
app.use(root, apiRouter);

//Routers which handle error
app.use(loadErrors);

module.exports = app;