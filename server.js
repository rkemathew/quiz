var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var wagner = require('wagner-core');

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api +json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var models = require('./app/models')(wagner);
app.use('/quiz/v1/', require('./app/routes.js')(wagner));

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Example app listening at port %s', port);
});

module.exports = server;
