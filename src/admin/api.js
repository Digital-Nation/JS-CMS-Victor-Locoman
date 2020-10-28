const express = require('express');
const db = require('../db');
const router = express.Router();


// @todo: de adăugat toate rutele necesare pentru a avea un API restfull

// DELETE POST

router.get('/delete/:id', (req, res) => {
    const id = Number(req.params.id)
    console.log(id);
    const post = db.remove('posts', id);
        res.render('pages/DeletePage', {});
    });

// DELETE ALL POSTS

router.get('/deleteAll', (req, res) => {
    const post = db.removeAll('posts');
        res.render('pages/deleteAllPage', {});
    });

// CREATE POST

router.get('/CreatePostPage', (req, res)=>{
    console.log('creating post')
    res.render('pages/CreatePostPage', {});
});

router.post('/CreatePostPage/createPost', (req, res)=>{
    const post = req.body;
    db.add('posts', post);
    res.render('pages/postCreated', {post});
    res.send(`Post with body ${post} title ${post.title} and id ${post.id} added to blog`);
    console.log(`Post with title ${post.title} and id ${post.id} added to blog`);
});

// EDIT POST

router.get('/edit/:id', (req, res)=> {
    const id = Number(req.params.id)
    const post = db.getBy('posts','id', id);
    res.render('pages/EditPostPage', {post: post});
})

router.post('/edit/:id', (req, res) =>{
    const id = Number(req.params.id);
    const updatedPost = db.getBy('posts','id', id);
    const { title, content, slug } =req.body;

    if(title) updatedPost.title = title;
    if(content) updatedPost.content = content;
    if(slug) updatedPost.slug = slug;

    res.render('pages/postUdated', {updatedPost});
    res.send(`Post with id ${id} was updated`);
})

module.exports = router;
