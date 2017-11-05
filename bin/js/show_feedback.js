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
  console.log("Sucessfully Connected");

// function that returns sql statment show comments and ratings for an event, leaves out employee email for anonymity.
function viewFeedback() {
var view = "SELECT feedback.eventID, rating, comment FROM feedback";
return view;
}

var show = viewFeedback()

  con.query(show, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

