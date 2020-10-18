const express = require('express');
const path = require('path');
const admin = require('./admin');
const blog = require('./blog');

const populate = require('./populateDb');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', admin);
app.use('/', blog);

app.listen(port, () => {
    console.log(`App started`);
    populate();
});