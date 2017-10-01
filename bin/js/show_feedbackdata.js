var mysql = require('mysql')
    fs    = require('fs')
   ,ini   = require('ini');

/* configuration is stored in an ini file 
   away from the web server file serving path 
*/

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
  con.query("SELECT * FROM  feedback", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

