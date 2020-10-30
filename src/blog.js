const express = require('express');
const db = require('./db');

const router = express.Router();


router.get('/', async (req, res) => {
    const posts = await db.posts.find().toArray();
    res.render('pages/home', { posts });
});


router.get('/', (req, res) => {
    const getPosts = { posts: db.getAll('posts') };
    res.render('pages/home', getPosts);
});

router.get('/:id', (req, res) => {
    const id = +req.params.id;
    const responseItem = db.get('posts', id);
    if (responseItem.status) {
        return res.status(responseItem.status).send(responseItem.msg);
    }
    const post = { posts: [responseItem] };

    res.render('pages/home', post);
});


router.get('/posts/:slug', async (req, res) => {
    const slug = req.params.slug;
    const post = await db.posts.findOne({ slug });
    console.log(post);
    if (post) {
        res.render('pages/single', { post });
    } else {
        res.render('pages/notFound', {});
    }
});

module.exports = router;
