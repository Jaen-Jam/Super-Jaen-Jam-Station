/**
 * 
 */
class Bot extends Paddle {

    /**
     * 
     * @param {Point2D} dimension 
     * @param {Number} speed 
     * @param {String} color 
     */
    constructor ( dimension, speed, color ) {
        let positionAux = new Point2D( canvas.width - dimension.x - 20, canvas.height/2 - dimension.y/2);
        super( positionAux, dimension, speed, color);
    }

    /**
     * 
     */
    static defaultConstructor() {
        let dimensionAux = new Point2D(10, 100);
        let speedAux = 7;
        let colorAux = "#cd0000";
        return new Bot ( dimensionAux, speedAux, colorAux );
    }

    /**
     * 
     */
    update () {
        if ( game.entities['ball'].position.y + game.entities['ball'].dimension.y < this.position.y ) {
            this.moveUp();
        } else if ( game.entities['ball'].position.y > this.position.y + this.dimension.y ) {
            this.moveDown();
        } else {
            this.moveStop();
        }
        super.update();
    }

    /**
     * 
     */
    draw () {
        super.draw();
    }

}