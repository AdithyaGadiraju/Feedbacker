var express = require('express');  
var router = express.Router();  
var admin = require('../models/admin');

router.get('/:employeeEmail?', function(req, res, next) {  
    if (req.params.employeeEmail) {  
        admin.showIndividualEmployeeEmail(req.params.employeeEmail, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  

    } else {  
        admin.showAllEmployeeEmails(function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }   
        });  
    }  
});  

router.post('/:employeeEmail', function(req, res, next) {  
    admin.addEmployee(req.params.employeeEmail, function(err) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.send("Emloyee Added"); 
        }  
    });  
});  

router.put('/:oldEmployeeEmail/:newEmployeeEmail', function(req, res, next) {  
    admin.updateEmployee(req.params.oldEmployeeEmail, req.params.newEmployeeEmail, function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.send("Email changed from " + req.params.oldEmployeeEmail + " to " + req.params.newEmployeeEmail);  
        }  
    });  
});  

router.delete('/:employeeEmail', function(req, res, next) {  
    admin.deleteEmployee(req.params.employeeEmail, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.send("Employee " +employeeEmail + " deleted!");  
        }  
    });  
});  



module.exports = router;  
