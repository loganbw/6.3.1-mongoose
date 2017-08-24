var express =require('express');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var router = require('./routes.js');
var mongoose = require('mongoose');
var app = express();
mongoose.connect('mongodb://localhost:27017/test');
app.use(bodyParser.urlencoded({extended: false}));

app.engine('handlebars', handlebars({"defaultLayout": 'base'}))
app.set('view engine', 'handlebars');


router(app);

app.listen(3000);
