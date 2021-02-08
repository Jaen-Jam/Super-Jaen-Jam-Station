import Point2D from './Point2D.js';
import Tableboard from './Tableboard.js';
import Snake from './Snake.js';
import Apple from './Apple.js';

export default class Game {

    static KEYS = {
        32: 'SPACE',
        37: 'LEFT',
        38: 'UP',
        39: 'RIGHT',
        40: 'DOWN',
        87: 'UP',
        83: 'DOWN',
    }

    constructor ( canvas ) {

        if ( typeof Game.instance === "object" ) {
            return Game.instance;
        }

        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.dimension = new Point2D(canvas.width, canvas.height);
        this.sizeCell = 20;
        this.numCell = new Point2D(this.dimension.x/this.sizeCell, this.dimension.y/this.sizeCell)
        this.keyPressed = {};
        this.entities = {};
        this.lastUpdateTime = new Date().getTime();
        this.fps = 60;
        this.interval = 1000/this.fps;
        this.updated = false;
        Game.instance = this;
        return this;
    }

    init () {
        this.entities['tableboard'] = new Tableboard();
        this.entities['snake'] = Snake.defaultConstructor();
        let applePosition = new Point2D (
            Math.floor(Math.random() * (this.numCell.x - 1)),
            Math.floor(Math.random() * (this.numCell.y - 1))
        )
        this.entities['apple'] = new Apple(applePosition)
    }

    initKeyEvent () {
        this.canvas.addEventListener('keydown', (event) => {
            const keyName = Game.KEYS[event.which];
            this.keyPressed[keyName] = true;
            event.preventDefault();
        });
        this.canvas.addEventListener('keyup', (event) => {
            const keyName = Game.KEYS[event.which];
            this.keyPressed[keyName] = false;
            event.preventDefault();
        });
    }

    start () {
        this.lastUpdateTime = new Date().getTime();
        this.canvas.focus();
        this.onFrame ( () => {
           this.fixedTimeStep(); 
        });
    }

    update () {
        for ( const entityKey in this.entities ) 
            this.entities[entityKey].update();
    }

    draw () {
        for ( const entityKey in this.entities ) 
            this.entities[entityKey].draw();
    }

    onFrame ( callback ) {
        if ( window.requestAnimationFrame ) {
            requestAnimationFrame ( () => {
                callback();
                this.onFrame(callback);
            });
        } else {
            setInterval(callback, this.interval);
        }
    }

    fixedTimeStep () {
        while ( this.lastUpdateTime < new Date().getTime() ) {
            this.update();
            this.updated = true;
            this.lastUpdateTime += this.interval;
        }

        if ( this.updated ) this.draw();

        this.updated = false;
    }

    variableTimeStep () {
        let currentTime = new Date().getTime();
        let timeDelta = currentTime - this.lastUpdateTime;
        let percentageOfInterval = timeDelta / this.interval;
        this.update( percentageOfInterval );
        this.draw();
        this.lastUpdateTime = new Date().getTime();
    }
}