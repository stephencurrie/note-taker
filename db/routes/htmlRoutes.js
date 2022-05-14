const router =require('express').Router();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));

});

// All other routes will respond with the index.html file

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));

});

module.exports = router;
