const router = require('express').Router();
const snake = require('./snake/snake');
const tetris = require('./tetris/tetris');


router.get('/', (req, res) => {
    res.send(`
    <html>
        <body>
            <h1>Zona de Juegos</h1>
            <br>
            <h2>Juegos</h2>
            <br>
            <li><a href="/games/pong">Pong</a></li>
            <li><a href="/games/snake">Snake</a></li>
            <li><a href="/games/tetris">Tetris</a></li>
            <br>
            <a href="/">VOLVER</a>
        </body>
    </html>
    `);
});

router.use('/snake', snake);
router.use('/tetris', tetris);

module.exports = router;