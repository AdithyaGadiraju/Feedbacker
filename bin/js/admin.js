//CRUD functions for employeemaster table.
function createEmployeemasterTable(){
    return "CREATE TABLE employeemaster (employeeEmail varchar(200) NOT NULL, PRIMARY KEY (employeeEmail));"
}

function insEmployee(employeeEmail){
    return "INSERT INTO employeemaster (employeeEmail) VALUES " + "('" + employeeEmail +"')";    
  }

function modEmployeeTable(oldEmployeeEmail, newEmployeeEmail){
    return "UPDATE employeemaster SET employeEmail = '" + oldEmployeeEmail + "' WHERE employeeEmail '" + newEmployeeEmail + "';"
}

function delEmployeeRow(employeeEmail){
    return "DELETE FROM employeemaster WHERE employeeEmail = '" + employeeEmail + "';"
}

function delEmployeemasterTable(){
    return "DROP TABLE employeemaster;"
}

function showEmployees(){
    "SELECT FROM employeemaster ORDER BY employeeEmail ASC;"
}

//CRUD functions for feedbackratingmaster table.
function createFeedbackratingmasterTable(){
    return "CREATE TABLE feedbackratingmaster (rating int(1) NOT NULL, ratingDescription varchar(120), PRIMARY KEY (rating));"
}

function insRating(rating, ratingDescription){
    return "INSERT INTO feedbackratingmaster (rating, ratingDescription) VALUES " + "(" + rating +", '" + ratingDescription + "');";    
  }

function modFeedbackratingmasterTable(ratingDescription, rating){
    return "UPDATE feedbackratingmaster SET ratingDescription = '" + ratingDescription + "' WHERE rating = '" + rating
}

function delFeedbackratingmasterRow(rating){
    return "DELETE FROM feedbackratingmaster WHERE rating = " + rating + ";"
}

function delFeedbackratingmasterTable(){
    return "DROP TABLE feedbackratingmaster;"
}

function showRatings(){
    return "SELECT * FROM feedbackratingmaster ORDER BY rating ASC;"
}

//CRUD functions for eventMaster 
function createEventmaster(){
    return "CREATE TABLE eventmaster (eventID int(3) NOT NULL, startDate datetime, finishDate datetime, eventDescription varchar(120), PRIMARY KEY (eventID));"
}

function insEvent(eventID, startDate, finishDate, eventDescription) {
    return "INSERT INTO eventmaster (eventID, startDate, finishDate, eventDescription) VALUES (" + eventID + ", '" + startDate + "', '" + finishDate + "', '" + eventDesc + "')";    
   }

function modEventmasterDescription(eventDescription, eventID){
    return "UPDATE eventmaster SET eventDescription = '" + eventDescription + "' WHERE eventID = '" + eventID + "';"
}

function delEventmasterRow(eventID){
    return "DELETE FROM eventmasters WHERE eventID = " + eventID + ";"
}

function delEventmasterTable(){
    return "DROP TABLE eventmaster;"
}

function showAllEvents(){
    return "SELECT * FROM eventmaster ORDER BY eventID ASC;"
}

function eventInfo(eventID){
    return "SELECT * FROM eventmaster WHERE eventID = '" + eventID + "';"
}

module.exports = {createEmployeemasterTable, insEmployee, modEmployeeTable, delEmployeeRow, delEmployeemasterTable, showEmployees, createFeedbackratingmasterTable, insRating, modFeedbackratingmasterTable, delFeedbackratingmasterRow, delFeedbackratingmasterTable, createEventmaster, insEvent, modEventmasterDescription, delEventmasterRow, showRatings, delEventmasterTable, eventInfo};