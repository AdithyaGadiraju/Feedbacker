var express = require('express');  
var router = express.Router();  
var Task = require('../models/admin');

router.get('/employeeEmail?', function(req, res, next) {  
    if (req.params.employeeEmail) {  
        admin.showIndividualEmployeeEmail(req.params.employeeEmail, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  

    } else {  
        Task.showAllEmployeeEmails(function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }   
        });  
    }  
});  

router.post('/', function(req, res, next) {  
    admin.addEmployee(req.body, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body); 
        }  
    });  
});  

router.put('/employeeEmail', function(req, res, next) {  
    admin.employeeEmail(req.params.employeeEmail, req.body, function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
});  

router.delete('/employeeEmail', function(req, res, next) {  
    admin.deleteEmployee(req.params.employeeEmail, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.send("Employee " +employeeEmail + " deleted!");  
        }  
    });  
});  



module.exports = router;  
