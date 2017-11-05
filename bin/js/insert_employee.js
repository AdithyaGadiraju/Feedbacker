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

  // function that returns sql statement for inserting employee data.
  function insEmp(email){
    return "INSERT INTO employeemaster (employeeEmail) VALUES " + "('" + email +"')";    
  }
  
 var ins = insEmp('james@hotmail.com');

    con.query(ins, function (err, result) {
    if (err) throw err;
    console.log("Employee inserted!");
    
  });
});