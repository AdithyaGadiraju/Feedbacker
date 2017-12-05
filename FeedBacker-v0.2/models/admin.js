var db = require('../dbconnection');
var mysql  = require('mysql');


var employeeQueries = {
    //GET
showIndividualEmployeeEmail : function(employeeEmail, callback) {
    db.query("SELECT * FROM employeemaster WHERE employeeEmail =?", [employeeEmail], callback);
},

showAllEmployeeEmails : function (callback) {                       
    db.query("SELECT * FROM employeemaster", callback);
},

    //POST
addEmployee : function (employeeEmail, callback) {
    db.query("INSERT INTO employeemaster (employeeEmail) VALUES ?", [employeeEmail], callback); 
},

    //PUT
updateEmployee : function (newEmployeeEmail, oldEmployeeEmail, callback) { 
    db.query("UPDATE employeemaster SET employeeEmail = ? WHERE employeeEmail = ?", [newEmployeeEmail, oldEmployeeEmail], callback);
},

    //DELETE
deleteEmployee : function (employeeEmail) { 
    db.query("DELETE FROM employeemaster WHERE employeeEmail = ?", [employeeEmail], callback);
}
}



//CRUD eventmaaster

exports.insEvent = function () {};

exports.modEventmasterDescription = function(){};

exports.delEventmasterRow = function () {};

exports.showAllEvents = function () {};

exports.showEventInfo = function () {};


//CRUD feedbackrating master
exports.insertRating = function () {};

exports.updateFeedbackRating = function () {};

exports.deleteFeedbackratingmasterRow = function () {};


module.exports = employeeQueries;
