const express = require('express');

const router = express.Router();

router.get('/posts', (req, res) => {
    res.send([]); // @todo: de întors articolele din baza de date
});
// @todo: de adăugat toate rutele necesare pentru a avea un API restfull

module.exports = router;
