//create const variables
const PORT = 8000 || process.env.PORT;
const DB = "mongodb://localhost/NodeJs&Angular2";

var mongoose = require('mongoose');
var mongojs = require('mongojs');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var app = express();

var mainRouter = require('./routes/index');
var apiRouter = require('./routes/api');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', mainRouter);
app.use('/api', apiRouter);


mongoose.connect(DB,function(err){
    if(err){
        return err;
    }else{
        console.log('Successfuly connected to ' + DB);
    }
});

app.set('views',path.join(__dirname , '/client/views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(express.static(__dirname + '/client'));


app.listen(PORT,function(){
    console.log('you listening to port ->' + PORT);
});


