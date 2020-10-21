<<<<<<< HEAD
const express = require('express');
<<<<<<< HEAD
const db = require('../db');

=======
const db =require('../db');
>>>>>>> 5b039ec37af6d3d64b64c3a4d04a30ef3b76d37c

const router = express.Router();


// @todo: de adăugat toate rutele necesare pentru a avea un API restfull

// GET ALL POSTS

router.get('/posts', (req, res) => {
<<<<<<< HEAD
    res.render('pages/home', {posts: db.getAll('posts')});
=======
const express = require("express");

const router = express.Router();

router.get("/posts", (req, res) => {
  res.send(db.getAll("posts"));
>>>>>>> acb948e66331317a3d2ef953e01b8ce46f476e3a
=======
    res.send(db.getAll('posts')); // @todo: de întors articolele din baza de date
>>>>>>> 5b039ec37af6d3d64b64c3a4d04a30ef3b76d37c
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
