const express = require('express');
const db = require('./db');

const router = express.Router();

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

router.get('/posts/:slug', (req, res) => {
    const slug = req.params.slug;
    const post = db.getBy('posts', 'slug', slug);
    if (post) {
        res.render('pages/single', {post});
    } else {
        res.render('pages/notFound', {});
    }
});

module.exports = router;
