const express = require('express');
const db = require('./db');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home', {posts: db.getAll('posts')});
});

router.get('/posts/:slug', (req, res) => {
<<<<<<< HEAD

    const slug = req.params.slug
    const post = db.getBy('posts','slug', slug);
    if(post){
        res.render('pages/single', {post: post});
    } else {
        res.render('pages/notFound', {})
    }
    
});

router.get('/aboutUs', (req, res)=>{
    res.render('pages/aboutUs', {});
})

=======
    const slug = req.params.slug;
    const post = db.getBy('posts', 'slug', slug);
    if (post) {
        res.render('pages/single', {post});
    } else {
        res.render('pages/notFound', {});
    }
});

>>>>>>> acb948e66331317a3d2ef953e01b8ce46f476e3a
module.exports = router;
