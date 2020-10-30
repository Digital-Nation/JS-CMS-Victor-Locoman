const express = require('express');
const path = require('path');
const api = require('./api'); // importăm din același folder

const router = express.Router(); // facem un router local, care va fi legat de ruta /admin

// definim folderul public ca fiind static
// tot aici, avem
router.use(express.static(path.join(__dirname, 'public')));

router.use('/api', api); // în api.js avem un alt router local, care va răspunde la /admin/api

module.exports = router;