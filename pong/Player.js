class Player extends Paddle {

    constructor( canvas, dimension, speed, color ) {
        let positionAux = new Point2D( 20, canvas.height/2 - dimension.y/2);
        super(canvas, positionAux, dimension, speed, color);
    }

    static defaultConstructor( canvas ) {
        let dimensionAux = new Point2D(10, 100);
        let speedAux = 15;
        let colorAux = "#3b1f5f";
        return new Player ( canvas, dimensionAux, speedAux, colorAux );
    }

    update () {
        super.update();
    }

    draw () {
        super.draw();
    }

    moveUp () {
        this.velocity.y = -this.speed;
    }

    moveDown() {
        this.velocity.y = this.speed;
    }
}