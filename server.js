//Module definitions
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const app = express();

//Handlebar engine setup
app.engine('handlebars', handelbars({defaultLayout: 'BMWorker'}));
app.set('view engine', 'handlebars');

//Static resources
app.use(express.static(__dirname + '/public'));

//Bodyparser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Route setup
var routes = require('./routes/index');
app.use('/', routes);
