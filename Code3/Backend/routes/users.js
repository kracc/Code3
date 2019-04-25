const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    // res.sendFile (path.join (__dirname, '../../public', 'index.html'));
    res.redirect('../login.html')
});

router.get('/register', (req, res) => {
    res.redirect('../register.html');
});


module.exports = router;