const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/posts', (req, res) => {
  const getPosts = db.getAll('posts');
  res.send(getPosts); // @todo: de întors articolele din baza de date
});
// @todo: de adăugat toate rutele necesare pentru a avea un API restfull

router.get('/posts/:id', (req, res) => {
  const id = +req.params.id;
  const responseItem = db.get('posts', id);
  if (responseItem.status) {
    return res.status(responseItem.status).send(responseItem.msg);
  }
  const post = { posts: [responseItem] };

  res.send(post);
});

router.post('/posts', (req, res) => {
  const item = req.body;
  const responseItem = db.add('posts', item);

  if (responseItem.status) {
    return res.status(responseItem.status).send(responseItem.msg);
  }
  const getPosts = db.getAll('posts');
  res.send(getPosts);
});

router.put('/posts/:id', (req, res) => {
  const updatedValues = req.body;
  const id = +req.params.id;

  const getItem = db.get('posts', id);
  if (getItem.status) {
    return res.status(getItem.status).send(getItem.msg);
  }

  if (!updatedValues.title && !updatedValues.content) {
    return res.status(400).send('Data is not in correct format.');
  }

  const updatedItem = db.set('posts', id, updatedValues);

  res.send(updatedItem);
});

router.delete('/posts/:id', (req, res) => {
  const id = +req.params.id;
  const getItem = db.get('posts', id);

  if (getItem.status) {
    return res.status(getItem.status).send(getItem.msg);
  }

  db.remove('posts', id);

  res.send('Post is deleted!');
});

router.delete('/posts', (req, res) => {
  db.removeAll('posts');
  res.send('All posts are deleted!');
});

module.exports = router;
