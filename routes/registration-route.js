var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/register', function(req, res, next) {
  res.render('registration-form',{ title: 'Express', session : req.session });
});

router.post('/register', function(req, res, next) {
    
    inputData ={
        full_name: req.body.full_name,
        user_email: req.body.user_email,
        user_password: req.body.user_password,
        movies: req.body.movies,
        shows: req.body.shows,
        books: req.body.books,
        songs: req.body.songs,
        games: req.body.games,
    }

var sql='SELECT * FROM user_login WHERE user_email =?';
db.query(sql, [inputData.user_email] ,function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
     var msg = inputData.user_email+ "was already exist";
 }
 else{
     
    var sql = 'INSERT INTO user_login SET ?';
    
   db.query(sql, inputData, function (err, data) {
      if (err) throw err;
           });
  var msg ="Your are successfully registered";
 }
 res.render('registration-form',{alertMsg:msg});
})
     
});
module.exports = router;