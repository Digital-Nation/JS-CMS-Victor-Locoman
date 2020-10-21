const express = require('express');
const db = require('../db');


const router = express.Router();


// @todo: de adăugat toate rutele necesare pentru a avea un API restfull

// GET ALL POSTS

router.get('/posts', (req, res) => {
    res.render('pages/home', {posts: db.getAll('posts')});
});

//http://localhost:3000/admin/api/posts ^^

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

// DELETE POST

router.get('/delete/:slug', (req, res) => {
    const id = req.params.slug
    const post = db.remove('posts', id);
        res.render('pages/DeletePage', {});
    });

// DELETE ALL POSTS

router.get('/deleteAll', (req, res) => {
    const post = db.removeAll('posts');
        res.render('pages/deleteAllPage', {});
    });

// CREATE POST

router.get('/CreatePostPage', (req, res) => {

    console.log('create page');
    res.send('create page');
  
        // res.render('pages/CreatePostPage', {});

    
});

// EDIT POST

router.get('/edit/:slug', (req, res)=>{
    console.log('editing page...')
    const slug = req.params.slug
    const post = db.getBy('posts','slug', slug);
    res.render('pages/EditPostPage', {post: post});
})


module.exports = router;
