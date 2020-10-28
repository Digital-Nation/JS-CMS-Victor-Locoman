const express = require('express');
const { data } = require('./db');
const db = require('./db');
const populate = require('./populateDb');
const populateDb =require('./populateDb');

const router = express.Router();


// GET ALL POSTS

router.get('/', (req, res) => {
    res.render('pages/home', {posts: db.getAll('posts')});
});

// GET SINGLE POST

router.get('/posts/:slug', (req, res) => {

    const slug = req.params.slug
    const post = db.getBy('posts','slug', slug);
    if(post){
        res.render('pages/single', {post: post});
    } else {
        res.render('pages/notFound', {})
    }
    
});

module.exports = router;
