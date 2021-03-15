const express = require('express');
const router = express.Router();
const db = require('../../db/database');

//View all employees
router.get('/employee', (req,res) =>{
    const sql = `SELECT * FROM employee`;
    const params = [];

    db.query(sql, (err, rows) =>{
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }

        res.json({
            message: 'success',
            data: rows
        });
    });
});

//Add to employees
router.post('/employee', ({body}, res) => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) 
                 Values (?,?,?, ?);`
    const params = [body.first_name, body.last_name, body.roleID, body.managerID]

    db.query(sql, params, function(err, result) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        
        console.table(result);
        res.json({
            message: 'success',
            data: body,
        });
    });
});

//Update employee's role
router.put('/employee/:id', (req,res) => {
    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
    const params =[req.body.role_id, req.body.id]

    db.query(sql, params, function(err, result){
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }

        res.json({
            message: 'success',
            data: req.body,
            changes: this.changes
        });
    });
});

module.exports = router;