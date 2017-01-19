const PORT = 3000;
const DB;

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var api = require('./routes/api');

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//====run templates with html extension===
app.engine('html', require('ejs').renderFile);


//Set Static Folder
app.use(express.static(path.join(__dirname + '/client')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use('/', index);
app.use('/api', api);

app.listen(PORT, function(){
    console.log('Server started on port ' + PORT);
});