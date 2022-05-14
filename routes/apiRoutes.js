const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils');
const uuidv1 = require('uuid/v1');

const router = require('express').Router();


router.get('/notes', (req, res) => {
    readFromFile('db/db.json')
    .then((data) => res.json(JSON.parse(data)));
    
});

router.post('/notes', (req, res) => {
    const newNote = req.body
    newNote.id = uuidv1();
    readAndAppend(newNote, 'db/db.json');
    res.json(newNote);
});

// router.delete('/notes/:id', (req, res) => {
//     readAndDelete(req.params.id, './db/db.json');
//     res.json(filteredData);
// });

module.exports = router;