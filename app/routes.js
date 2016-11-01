var express = require('express');
var api = express.Router();

module.exports = function(wagner) {
   api.get('/question', wagner.invoke(function(Question) {
      return function(req, res) {
        Question.find(function(err, questions) {
          if (err) {
            res.send(err);
          }

          res.json(questions);
        });
      };
   }));

/*
   api.get('*', function(req, res) {
       res.sendfile('./public/views/index.html');
   });
*/

  return api;
};
