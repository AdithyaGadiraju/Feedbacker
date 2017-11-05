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

// function that returns sql statement for inserting data into eventmaster table.
function insEvent(eID, sDate, fDate, eDesc) {
     return "INSERT INTO eventmaster (eventID, startDate, finishDate, eventDescription) VALUES (" + eID + ", '" + sDate + "', '" + fDate + "', '" + eDesc + "')";    
    }
    
    var ins = insEvent(1, '2017-01-01 15:00:00', '2017-01-01 16:00:00', 'Monthly meeting for product team')
    con.query(ins, function (err, result) {
    if (err) throw err;
    console.log("New Event Inserted!!!");
    
  });
});