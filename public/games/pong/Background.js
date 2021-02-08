/**
 * 
 */
class Background extends Entity {

    /**
     * 
     * @param {String} color 
     */
    constructor ( color ) {
        super( Point2D.defaultConstructor(), game.dimension, 0, color);
    }

    /**
     * 
     */
    static defaultConstructor () {
        return new Background ( '#000' );
    }

    /**
     * 
     */
    update () {
        super.update();
    }

    /**
     * 
     */
    draw () {
        super.draw();
        game.context.fillStyle = '#fff';
        game.context.font = "60px monospace";
        game.context.fillText(game.entities['player'].score, game.dimension.x * 3 / 8, 50);
        game.context.fillText(game.entities['bot'].score,    game.dimension.x * 5 / 8, 50);
    }
}