const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('tetris', {});
});

module.exports = router;