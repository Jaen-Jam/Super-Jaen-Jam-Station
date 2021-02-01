
class Entity {

    /**
     * 
     * @param {Point2D} position 
     * @param {Point2D} dimension 
     * @param {number} speed 
     * @param {string} color
     */
    constructor ( position, dimension, color ) {
        this.position = position;
        this.dimension = dimension;
        this.color = color;
    }

    /**
     * 
     * @param {Entity} e1 
     */
    static copyConstructor ( e1 ) {
        return new Entity( e1.position, e1.dimension, e1.speed, e1.color );
    }
    
    /**
     * 
     */
    update () {
        this.position = this.position.add(this.velocity);
    }

    /**
     * 
     * @param {} context 
     */
    draw () {
        game.context.fillStyle = this.color;
        game.context.fillRect(this.position.x, this.position.y, this.dimension.x, this.dimension.y);
    }

    /**
     * 
     * @param {Entity} e1 
     */
    intersect( e1 ) {
        return this.position.x + this.dimension.x > e1.position.x &&
                this.position.y + this.dimension.y > e1.position.y &&
                this.position.y < e1.position.y + e1.dimension.y &&
                this.position.x < e1.position.x + e1.dimension.x;
    }
}

module.exports = Entity;