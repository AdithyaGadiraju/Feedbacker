//File containing functions 

// Returns connection object that can be used to perform DB tasks.
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


module.exports = {returnCon, queryDatabase}
