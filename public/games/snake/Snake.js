import Entity from './Entity.js';
import Bone from './Bone.js';
import Point2D from './Point2D.js';
import Game from './Game.js';

export default class Snake extends Entity {

    constructor ( position, color ) {
        super(position, color);
        this.body = [new Bone(position, color)];
        this.score = 0;
    }

    static defaultConstructor () {
        console.log(Math.floor(Game.instance.numCell.x/2));
        return new Snake (
            new Point2D( 
                Math.floor(Game.instance.numCell.x/2),
                Math.floor(Game.instance.numCell.y/2)),
            '#000'
        );
    }

    update () {
        for ( const entityKey in this.body ) 
            this.body[entityKey].update();
    }

    draw () {
        for ( const entityKey in this.body ) 
            this.body[entityKey].draw();
    }
}