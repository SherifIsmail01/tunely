


var express = require('express'),
	bodyParser = require('body-parser');
	db = require('./models');

var controllers = require('./controllers');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/api', controllers.api.index);
app.get('/api/albums', controllers.albums.index);
app.post('/api/albums', controllers.albums.create);


app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});

