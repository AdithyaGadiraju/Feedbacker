var mysql = require('mysql');
var fs = require('fs');
var ini = require('ini');
var DB = require('./feedBackerDB');
var con = DB.returnCon(mysql, fs, ini);


//CRUD functions for employeemaster table.
function createEmployeemasterTable() {
    var sql = "CREATE TABLE employeemaster (employeeEmail varchar(200) NOT NULL, PRIMARY KEY (employeeEmail))";
    DB.queryDatabase(con, sql);
}

function insEmployee(employeeEmail) {
    var sql = "INSERT INTO employeemaster (employeeEmail) VALUES " + "('" + employeeEmail + "')";
    DB.queryDatabase(con, sql);
}

function modEmployeeTable(oldEmployeeEmail, newEmployeeEmail) {
    var sql = "UPDATE employeemaster SET employeeEmail = '" + oldEmployeeEmail + "' WHERE employeeEmail '" + newEmployeeEmail + "'";
    DB.queryDatabase(con, sql);
}

function delEmployeeRow(employeeEmail) {
    var sql = "DELETE FROM employeemaster WHERE employeeEmail = '" + employeeEmail + "'";
    DB.queryDatabase(con, sql);
}

function delEmployeemasterTable() {
    var sql = "DROP TABLE employeemaster";
    DB.queryDatabase(con, sql);
}

function showEmployees() {
    var sql = "SELECT FROM employeemaster ORDER BY employeeEmail ASC";
    DB.queryDatabase(con, sql);
}

//CRUD functions for feedbackratingmaster table.
function createFeedbackratingmasterTable() {
    var sql = "CREATE TABLE feedbackratingmaster (rating int(1) NOT NULL, ratingDescription varchar(120), PRIMARY KEY (rating))";
    DB.queryDatabase(con, sql);
}

function insRating(rating, ratingDescription) {
    var sql = "INSERT INTO feedbackratingmaster (rating, ratingDescription) VALUES " + "(" + rating + ", '" + ratingDescription + "')";
    DB.queryDatabase(con, sql);
}

function modFeedbackratingmasterTable(ratingDescription, rating) {
    var sql = "UPDATE feedbackratingmaster SET ratingDescription = '" + ratingDescription + "' WHERE rating = '" + rating;
    DB.queryDatabase(con, sql);
}


function delFeedbackratingmasterRow(rating) {
    var sql = "DELETE FROM feedbackratingmaster WHERE rating = " + rating;
    DB.queryDatabase(con, sql);
}

function delFeedbackratingmasterTable() {
    var sql = "DROP TABLE feedbackratingmaster";
    DB.queryDatabase(con, sql);
}

function showRatings() {
    var sql = "SELECT * FROM feedbackratingmaster ORDER BY rating ASC";
    DB.queryDatabase(con, sql);
}

//CRUD functions for eventMaster table.
function createEventmaster() {
    var sql = "CREATE TABLE eventmaster (eventID int(3) NOT NULL, startDate datetime, finishDate datetime, eventDescription varchar(120), PRIMARY KEY (eventID))";
    DB.queryDatabase(con, sql);
}

function insEvent(eventID, startDate, finishDate, eventDescription) {
    var sql = "INSERT INTO eventmaster (eventID, startDate, finishDate, eventDescription) VALUES (" + eventID + ", '" + startDate + "', '" + finishDate + "', '" + eventDescription + "')";
    DB.queryDatabase(con, sql);
}

function modEventmasterDescription(eventDescription, eventID) {
    var sql = "UPDATE eventmaster SET eventDescription = '" + eventDescription + "' WHERE eventID = " + eventID;
    DB.queryDatabase(con, sql);
}

function delEventmasterRow(eventID) {
    var sql = "DELETE FROM eventmasters WHERE eventID = " + eventID;
    DB.queryDatabase(con, sql);
}

function delEventmasterTable() {
    var sql = "DROP TABLE eventmaster";
    DB.queryDatabase(con, sql);
}

function showAllEvents() {
    var sql = "SELECT * FROM eventmaster ORDER BY eventID ASC";
    DB.queryDatabase(con, sql);
}

function showEventInfo(eventID) {
    var sql = "SELECT * FROM eventmaster WHERE eventID = " + eventID;
    DB.queryDatabase(con, sql);
}

//Create and Delete functions for feedback table.
function createFeedbackTable() {
    var sql = "CREATE TABLE feedback(eventID int(3) NOT NULL, employeeEmail varchar(200) NOT NULL, rating int(1) NOT NULL, comment varchar(120), PRIMARY KEY (eventID, employeeEmail, rating), CONSTRAINT employeeEmail FOREIGN KEY (employeeEmail) REFERENCES employeemaster (employeeEmail), CONSTRAINT eventID FOREIGN KEY (eventID) REFERENCES eventmaster (eventID), CONSTRAINT rating FOREIGN KEY (rating) REFERENCES feedbackratingmaster (rating));";
    DB.queryDatabase(con, sql);
}

function delFeedbackTable() {
    var sql = "DROP TABLE feedback";
    DB.queryDatabase(con, sql);
}

module.exports = {createEmployeemasterTable, insEmployee, modEmployeeTable, delEmployeeRow, delEmployeemasterTable, showEmployees, createFeedbackratingmasterTable, insRating, modFeedbackratingmasterTable, delFeedbackratingmasterRow, delFeedbackratingmasterTable, createEventmaster, insEvent, modEventmasterDescription, delEventmasterRow, showRatings, delEventmasterTable, showEventInfo, createFeedbackTable, delFeedbackTable };
