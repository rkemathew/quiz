var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
  name : {type : String, default: ''}
});

module.exports = mongoose.model('Question', questionSchema, 'questions');
module.exports.questionSchema = questionSchema;
