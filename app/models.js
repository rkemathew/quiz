var mongoose = require('mongoose');
var config = require('./config/db.js');

module.exports = function(wagner) {
  var Question = require('./models/question');
  wagner.factory('Question', function() {
    return Question;
  });
};
