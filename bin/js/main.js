var mysql = require('mysql')
insert = require('./insert_data')
fs    = require('fs')
,ini   = require('ini');



var config = ini.parse(fs.readFileSync('../../config.ini', 'utf-8'))
var host      = config.database.host;
var user      = config.database.user;
var password  = config.database.password;
var database  = config.database.dbname;

console.log("host ="+ host+" user = "+ user+" password = "+password+" database= "+database);


var con = mysql.createConnection({
    host     : host,
    user     : user,
    password : password,
    database : database
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query(insert.insEmp('james@hotmail.com'), function (err, result) 
 {
    if (err) throw err;
    console.log("Employee inserted!");
    
  })

  con.query(insert.insEvent(1, '2017-01-01 15:00:00', '2017-01-01 16:00:00', 'Monthly meeting for product team'),function (err, result) {
    if (err) throw err;
    console.log("Event added!");
    
  })

  con.query(insert.insRating(1, 'Very Good'), function (err, result) {
    if (err) throw err;
    console.log("Rating added!");
    
  })

  con.query(insert.insFeedback(1, 'james@hotmail.com', 1, 'Could have touched a little more on the new Iphone X but overall quite good.'), function (err, result) {
    if (err) throw err;
    console.log("Feedback recorded!");
    
  });


  con.query(insert.viewFeedback(), function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });



});