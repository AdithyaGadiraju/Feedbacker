var mysql = require('mysql');
var ini = require('ini');
var fs = require('fs');

var config = ini.parse(fs.readFileSync('../config.ini', 'utf-8'))

var dbOptions = {
    host      : config.database.host,
    user      : config.database.user,
    password  : config.database.password,
    database  : config.database.dbname
  };
  
var connection = mysql.createPool(dbOptions);

module.exports = connection;
