var mysql = require('mysql');
var fs = require('fs');
var ini = require('ini');
var DB = require('./feedBackerDB');
var con = DB.returnCon(mysql, fs, ini);

//Functions that execute SQL queries relevant to the end user.
function insertFeedback(eventID, employeeEmail, rating, comment) {
    var sql = "INSERT INTO feedback (eventID, employeeEmail, rating, comment) VALUES (" + eventID + ", '" + employeeEmail + "', " + rating + ", '" + comment + "')";
    DB.queryDatabase(con, sql);    
}

function modFeedback(rating, employeeEmail, comment, eventID){
    var sql = "UPDATE feedback SET rating = '" + rating + "', employeeEmail = '" + employeeEmail + "', comment = '" + comment + "' WHERE eventID = " + eventID ;
    DB.queryDatabase(con, sql);
}

function showSingleEventFeedback(eventID, employeeEmail){
    var sql ="SELECT feedback.eventID, rating, comment FROM feedback WHERE eventID = " + eventID + " AND employeeEmail = '" + employeeEmail + "'";
    DB.queryDatabase(con, sql);
}

function showAllEmployeeFeedback(employeeEmail){
    var sql = "SELECT eventID, rating, comment FROM feedback WHERE employeeEmail = '" + employeeEmail + "'";
    DB.queryDatabase(con, sql);
}

module.exports = {insFeedback, modFeedback, showSingleEventFeedback, showAllEmployeeFeedback};

