const express = require('express');
const router = express.Router();
const db = require('../../db/database');

//View all departments
router.get('/department', (req,res) =>{
    const sql = `SELECT * FROM department`;
    const params = [];

    db.query(sql, (err, rows) =>{
        if (err) {
            res.status(500).json({error: err.message});
            return;
        }

        console.table(rows);
        res.json({
            message: 'success',
            data: rows
        });
    });
});

//Add to departments
router.post('/department', ({body}, res) => {
    const sql = `INSERT INTO department (name) Values (?);`
    const params = [body.name]

    db.query(sql, params, function(err, result) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        
        res.json({
            message: 'success',
            data: body,
            id: this.id
        });
    });
});

module.exports = router;