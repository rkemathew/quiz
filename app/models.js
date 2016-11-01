var mongoose = require('mongoose');

module.exports = function(wagner) {
  var config = require('./config/db.js');
  var db = mongoose.connect(config.url);

  var Question = db.model('Question', require('./schema/question'), 'questions');

  wagner.factory('Question', function() {
    return Question;
  });

  var models = {
    Question: Question
  };

  return models;
};
