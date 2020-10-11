const db = require('./db');

// @todo: populează de aici baza de date cu mai multe intrări pentru a fi ușor de testat
const populate = () => {
    db.add('posts', {
        title: '🚀My first blog post!',
        content: 'Well, it works. Welcome to my blog.',
        slug: 'post-1',
    });
    db.add('posts', {
        title: '🙋Hi, i am Alex',
        content: 'Explorer Digital Nation',
        slug: 'post-2',
    });
    db.add('posts', {
        title: '☠Fullstack JavaScript Course',
        content: 'First project',
        slug: 'post-3',
    });
};

module.exports = populate
