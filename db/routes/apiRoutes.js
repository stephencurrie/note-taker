const { readAndAppend, readFromFile } = require('../../helpers/fsUtils');

const router =require('express').Router();
const {
    readfromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');


router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then(data) => res.json(JSON.parse(data)));
    res.json('get!');
});

router.post('/notes', (req, res) => {
    const newNote = req.body
    newNote.id = uuidv4();
    readAndAppend(newNote, '.db.db.json');
    res.json(newNote);
});

// router.delete('/notes/:id', (req, res) => {
//     readAndDelete(req.params.id, './db/db.json');
//     res.json(filteredData);
// });

module.exports = router;