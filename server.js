var express = require('express'),
	bodyParser = require('body-parser'),
	db = require('./models');

var controllers = require('./controllers');
var app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function (req, res){
	res.sendFile('views/index.html', {root : __dirname});
	//console.log (__dirname);
});

app.get('/api', controllers.api.index);



app.listen(process.env.PORT || 3000, function () {
	console.log ('tunely app listening at http://localhost:3000');
});