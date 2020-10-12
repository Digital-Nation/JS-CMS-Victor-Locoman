const express = require('express');
const db = require('../db');
const router = express.Router();

//when the server receiving a post request, create a new post
router.get('/submit', (req,res)=>{
    db.add('posts', {
        title: req.query.title,
        content: req.query.content,
    });
})

router.delete('/delete:id', (req,res)=>{
   db.remove('posts', req.params.id)
})

router.put('/edit:id', (req,res)=>{
    db.set('posts', req.params.id, {
        title: req.query.title,
        content: req.query.content,
    });
 
 })

router.get('/posts', (req, res) => {
    res.status(200).json({posts: db.getAll('posts')});
    // @todo: de întors articolele din baza de date
});


// @todo: de adăugat toate rutele necesare pentru a avea un API restfull
router.get('/', function (req, res) {
    res.send('API')
});

module.exports = router;
