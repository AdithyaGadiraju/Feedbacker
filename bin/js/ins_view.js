function insEmp(email){
    return "INSERT INTO employeemaster (employeeEmail) VALUES " + "('" + email +"')";    
  }

function insEvent(eID, sDate, fDate, eDesc) {
    return "INSERT INTO eventmaster (eventID, startDate, finishDate, eventDescription) VALUES (" + eID + ", '" + sDate + "', '" + fDate + "', '" + eDesc + "')";    
   }

function insRating(eRating, eRatingDesc){
    return "INSERT INTO feedbackratingmaster (rating, ratingDescription) VALUES " + "(" + eRating +", '" + eRatingDesc + "')";    
  }

function insFeedback(eID, eEmail, rate, comm) {
    return "INSERT INTO feedback (eventID, employeeEmail, rating, comment) VALUES (" + eID + ", '" + eEmail + "', " + rate + ", '" + comm + "')";    
    }

function viewFeedback() {
    var view = "SELECT feedback.eventID, rating, comment FROM feedback";
    return view;
    }

    module.exports =  { insEmp , insEvent , insRating , insFeedback, viewFeedback };