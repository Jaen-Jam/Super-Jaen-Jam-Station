const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('snake', {});
});

module.exports = router;