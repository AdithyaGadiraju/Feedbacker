var mysql = require('mysql')
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
function feedback(eventID, employeeEmail, rating, comment) {
    this.eventID = eventID;
    this.employeeEmail = employeeEmail;
    this.rating = rating;
    this.comment = comment;
    var sql = "INSERT INTO feedback (eventID, employeeEmail, rating, comment) VALUES (eventID, employeeEmail, rating, comment)";    
    }
    var insFeed = new feedback("2", "jacob@gmail.com", "3", "very bad mate!")
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    
  });
});