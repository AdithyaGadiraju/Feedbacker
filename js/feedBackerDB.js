var mysql = require('mysql');

//insert login details.
//Will our database be on a server? Currently is stored locally so I cannot connect.


con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM  eventMaster", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});