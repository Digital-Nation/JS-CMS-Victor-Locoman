const express = require('express');
const db = require('./db');

const router = express.Router();

// @todo: completează cu toate rutele necesare
router.get('/', (req, res) => {
    res.render('pages/home', {posts: db.getAll('posts')});
});

module.exports = router;
