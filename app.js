var express =require('express');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var router = require('./routes.js');
var mongoose = require('mongoose');
var app = express();
var database = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
mongoose.connect(database);
app.use(bodyParser.urlencoded({extended: false}));

app.engine('handlebars', handlebars({"defaultLayout": 'base'}))
app.set('view engine', 'handlebars');


router(app);

app.listen(process.env.PORT || 3000);
