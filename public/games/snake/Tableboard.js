import Entity from './Entity.js';
import Point2D from './Point2D.js';
import Game from './Game.js'

export default class Tableboard extends Entity {

    /**
     * 
     * @param {Point2D} dimension 
     */
    constructor () {
        super( new Point2D(0,0), '#000');
    }


    /**
     * 
     */
    update () {
        //super.update();
    }

    /**
     * 
     */
    draw () {
        let gl = Game.instance.context;
        gl.fillStyle = this.color;
        gl.font = "60px monospace";
        gl.fillText(Game.instance.entities['snake'].score, Game.instance.dimension.x /2, 50);
        if ( Game.instance.gameover ) {
            gl.font = "200px monospace";
            gl.textAlign = "center";
            gl.fillText('GAME OVER', Game.instance.dimension.x /2, Game.instance.dimension.y /2);
        } 
    }
}