import Point2D from './Point2D.js';
import Game from './Game.js';

/**
 * 
 */
export default class Entity {

    velocity;
    /**
     * 
     * @param {Point2D} position 
     * @param {Point2D} dimension 
     * @param {string} color
     */
    constructor ( position, color ) {
        this.position = position;
        this.color = color;
    }

    /**
     * 
     * @param {Entity} e1 
     */
    static copyConstructor ( e1 ) {
        return new Entity( e1.position, e1.speed, e1.color );
    }
    
    /**
     * 
     */
    update () {
        
    }

    /**
     * 
     * @param {} context 
     */
    draw () {
        let gl = Game.instance.context;
        let size = Game.instance.sizeCell;
        gl.fillStyle = this.color;
        gl.fillRect(this.position.x * size, this.position.y * size, size, size);
    }

    /**
     * 
     * @param {Entity} e1 
     */
    intersect( e1 ) {
        return this.position.x + Game.instance.sizeCell > e1.position.x &&
                this.position.y + Game.instance.sizeCell > e1.position.y &&
                this.position.y < e1.position.y + Game.instance.sizeCell &&
                this.position.x < e1.position.x + Game.instance.sizeCell;
    }

    out () {
        console.log(`
            position: (${this.position.x}, ${this.position.y});
            dimension: (${this.dimension.x}, ${this.dimension.y});
        `)
    }
}