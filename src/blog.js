const express = require('express');
const db = require('./db');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home', { posts: db.getAll('posts') });
});

router.get('/posts/:slug', (req, res) => {
    const slug = req.params.slug;
    const post = db.getBy('posts', 'slug', slug);
    if (post) {
        res.render('pages/single', { post });
    } else {
        res.render('pages/notFound', {

        });
    }
})

module.exports = router;