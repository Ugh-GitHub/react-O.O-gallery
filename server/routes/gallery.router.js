const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    let queryText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id]).then((result) => {
        console.log(queryText);
        // logs out ALL of the data from the database in the terminal (>.<)
        //console.log('result from database', result);
        res.sendStatus(200);
    }).catch((error)=>{
        console.log("error with get request",error);
        res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "gallery" ORDER BY "id";'; // DECIDE WHAT GOES HERE FOR TABLE NAME
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log("error with request", error);
        res.sendStatus(500);
    });
}); // END GET Route

router.post('/', (req, res) => {
    const newGalleryItem = req.body;
    if (newGalleryItem.path !== 'NULL' && newGalleryItem.description !== 'NULL') {
        const queryText = `INSERT INTO gallery (path, description , likes) VALUES 
    ($1, $2, $3)`;
        // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
        // the $1, $2, etc get substituted with the values from the array below
        pool.query(queryText, [newGalleryItem.path,newGalleryItem.description,newGalleryItem.likes])
            .then((result) => {
                console.log(`Added gallery item to the database`, newGalleryItem);
                res.sendStatus(201);
            })
            .catch((error) => {
                console.log(`Error making database query ${queryText}`, error);
                res.sendStatus(500); // Good server always responds
            })
    }
})

module.exports = router;