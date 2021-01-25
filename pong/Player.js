/**
 * 
 */
class Player extends Paddle {

    /**
     * 
     * @param {Point2D} dimension 
     * @param {Number} speed 
     * @param {String} color 
     */
    constructor(  dimension, speed, color ) {
        let positionAux = new Point2D( 20, canvas.height/2 - dimension.y/2);
        super( positionAux, dimension, speed, color);
    }

    /**
     * 
     */
    static defaultConstructor( ) {
        let dimensionAux = new Point2D(10, 100);
        let speedAux = 15;
        let colorAux = "#3b1f5f";
        return new Player ( dimensionAux, speedAux, colorAux );
    }

    /**
     * 
     */
    update () {
        if ( game.keyPressed['UP'] ) {
            this.moveUp();
        } else if ( game.keyPressed['DOWN'] ) {
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