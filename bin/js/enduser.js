// Feedback CRUD functions.
function createFeedbackTable(){
return "CREATE TABLE feedback (eventID int(3) NOT NULL, employeeEmail varChar(200) NOT NULL, rating int(1) NOT NULL, comment varChar(200), PRIMARY KEY (eventID, employeeEmail, rating), FORIEGN KEY (eventID) REFRENCES eventmaster (eventID), FORIEGN KEY (employeeEmail) REFRENCES employeemaster(employeeEmail), FORIEGN KEY (rating) REFRENCES feedbackratingmaster (rating));"
}

function insFeedback(eventID, employeeEmail, rating, comment) {
    return "INSERT INTO feedback (eventID, employeeEmail, rating, comment) VALUES (" + eventID + ", '" + employeeEmail + "', " +  + ", '" + comment + "')";    
    }

function modFeedback(rating, employeeEmail){
    return "UPDATE feedback SET rating = '" + rating + "', SET employeeEmail '" + employeeEmail + "' WHERE eventID = " + eID + ";" 
}

function delFeedbackRow(eventID, employeeEmail, rating){
    return "DELETE FROM feedback WHERE (eventID, employeeEmail, rating) IN (('" + eventID + "', '" + employeeEmail + "', '" + rating + "'));"
}

function delFeedbackTable(){
    return "DROP TABLE feedback;"
}

function showSingleEventFeedback(eventID){
    return "SELECT feedback.eventID, rating, comment FROM feedback WHERE eventID = '" + eventID + "';"
}

function showAllEventFeedback(){
    return "SELECT feedback.eventID, rating, comment FROM feedback"
}


module.exports = {createFeedbackTable, insFeedback, modFeedback, delFeedbackRow, delFeedbackTable, showSingleEventFeedback, showAllEventFeedback};

