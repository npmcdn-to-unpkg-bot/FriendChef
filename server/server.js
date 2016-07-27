var express = require('express');
var app = express();
var db = require('./db');

var path = require('path');
var router = require('./router.js');

var parser = require('body-parser');

/////////////////////////////////////////////////////

app.use(parser.json());
app.use(express.static(__dirname + '/../client'));


app.use('/login', router);
app.use('/signup', router);
app.use('/group', router);


app.get('*', function(req, res) {
  console.log('---REQ URL', req.url);
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

/////////////////////////////////////////////////////

app.set('port', (process.env.PORT || 8888));
app.listen(app.get('port'), function() {
  console.log('Running express on port', app.get('port'));
});