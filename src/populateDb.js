const db = require('./db');

// @todo: populează de aici baza de date cu mai multe intrări pentru a fi ușor de testat
const populate = () => {
    db.add('posts', {
        title: '🚀 My first blog post!!!',
        content: 'Well, it works. Welcome to my blog.',
    });
};

module.exports = populate
