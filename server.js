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

app.listen(3000);

module.exports = app;
