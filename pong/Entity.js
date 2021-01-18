
class Entity {

    /**
     * 
     * @param {Point2D} position 
     * @param {Point2D} dimension 
     * @param {number} speed 
     * @param {string} color
     */
    constructor ( canvas, position, dimension, speed, color) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.position = position;
        this.dimension = dimension;
        this.speed = speed;
        this.velocity = new Point2D(0, 0);
        this.color = color;
    }

    /**
     * 
     * @param {Entity} e1 
     */
    static copyConstructor ( e1 ) {
        return new Entity( e1.canvas, e1.position, e1.dimension, e1.speed);
    }
    
    /**
     * 
     */
    update () {
        this.position.add(this.velocity);
    }

    /**
     * 
     * @param {} context 
     */
    draw () {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.position.x, this.position.y, this.dimension.x, this.dimension.y);
    }

    /**
     * 
     * @param {*} e1 
     */
    intersect( e1 ) {
        return this.position.x + this.dimension.x > e1.position.x &&
                this.position.y + this.dimension.y > e1.position.y &&
                this.position.y < e1.position.y + e1.dimension.y &&
                this.position.x < e1.position.x + e1.dimension.x;
    }
}
