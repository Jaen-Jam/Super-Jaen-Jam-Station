import Point2D from './Point2D.js';

export default class Game {

    static KEYS = {
        32: 'SPACE',
        37: 'LEFT',
        38: 'UP',
        39: 'RIGHT',
        40: 'DOWN'
    }

    constructor ( canvas ) {
        if ( typeof Game.instance === "object" ) {
            return Game.instance;
        }
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.gameoverFlat = false;
        this.dimension = new Point2D(canvas.width, canvas.height);
        this.sizeCell = 40;
        this.numCell = new Point2D(this.dimension.x/this.sizeCell, this.dimension.y/this.sizeCell)
        this.keyPressed = [];
        this.entities = {};
        this.lastUpdateTime = new Date().getTime();
        this.fps = 60;
        this.interval = 1000/this.fps;
        this.updated = false;
        Game.instance = this;
        return this;
    }

    addEntity ( name, entity ) {
        this.entities[name] = entity;
    }

    initKeyEvent () {
        this.canvas.addEventListener('keydown', (event) => {
            const keyName = Game.KEYS[event.which];
            if ( keyName !== undefined ) {
                this.keyPressed.unshift(keyName);
            }
            event.preventDefault();
        })
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
        this.context.clearRect(0, 0, this.dimension.x, this.dimension.y);
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

}