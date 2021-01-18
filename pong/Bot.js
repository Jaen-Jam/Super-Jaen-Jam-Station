class Bot extends Paddle {

    constructor ( canvas, dimension, speed, color ) {
        let positionAux = new Point2D( canvas.width - dimension.x - 20, canvas.height/2 - dimension.y/2);
        super(canvas, positionAux, dimension, speed, color);
    }

    static defaultConstructor( canvas ) {
        let dimensionAux = new Point2D(10, 100);
        let speedAux = 15;
        let colorAux = "#cd0000";
        return new Bot ( canvas, dimensionAux, speedAux, colorAux );
    }

    update () {
        super.update();
    }

    draw () {
        super.draw();
    }

}