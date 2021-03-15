const express = require('express');
const router = express.Router();
const db = require('../../db/database');

//View all roles
router.get('/role', (req,res) =>{
    const sql = `SELECT * FROM companyrole`;
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

//Add to roles
router.post('/role', ({body}, res) => {
    const sql = `INSERT INTO companyrole (title, salary, department_id) Values (?,?,?);`
    const params = [body.title, body.salary, body.depID]

    db.query(sql, params, function(err, result) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        
        res.json({
            message: 'success',
            data: body,
        });
    });
});

module.exports = router;