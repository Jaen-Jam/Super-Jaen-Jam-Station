//const Point2D = require('../../utils/Point2D');
//const Snake = require('./Snake');
const router = require('express').Router();


router.get('/', (req, res) => {
    res.send(`
    <html>
        <body>
            <h1>Snake</h1>
        </body>
    </html>
    `);
});

/** 
let canvas = document.getElementById('canvas-pong');
let context = canvas.getContext('2d');
let dimension = new Point2D(context.width/54, context.height/36);
let position = new Point2D(canvas.width/2 - dimension.x/2, canvas.height/2 - dimension.y/2)
let snake = new Snake(position, dimension, '#cc00cc');
snake.draw();
*/

module.exports = router;