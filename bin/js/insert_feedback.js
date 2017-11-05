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

// function that gives sql statement that can be used to insert data into feedback table.
function insfeedback(eID, eEmail, rate, comm) {
    return "INSERT INTO feedback (eventID, employeeEmail, rating, comment) VALUES (" + eID + ", '" + eEmail + "', " + rate + ", '" + comm + "')";    
    }
    
    var ins = insfeedback(1, 'james@hotmail.com', 1, "Could have touched a little more on the new Iphone X but overall quite good.")
    con.query(ins, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    
  });
});