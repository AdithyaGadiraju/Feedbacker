 // returns a variable that is used to query functions.
function returnCon(mysql, fs, ini){
  var config = ini.parse(fs.readFileSync('../../config.ini', 'utf-8'))
  var host      = config.database.host;
  var user      = config.database.user;
  var password  = config.database.password;
  var database  = config.database.dbname;

  var con = mysql.createConnection({
    host     : host,
    user     : user,
    password : password,
    database : database
  });

  return con;
}

function queryDatabase(con, sql){
  con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Query Successfull.");
      });
    }
  
function connectToDatabase(con) {
      con.connect(function (err) {
          if (err) throw err;
          console.log("Connection Successfull!")
      });
  }

  function disconnectDatabase() {
    con.end();
}

module.exports ={connectToDatabase, disconnectDatabase, returnCon, queryDatabase};
