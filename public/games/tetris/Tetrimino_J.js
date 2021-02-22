import Point2D from "./Point2D.js";
import Box from "./Box.js";
import Tetrimino from "./Tetrimino.js";


export default class Tetrimino_J extends Tetrimino {

    constructor ( position ) {

        let color = '#0100f1';
        super( position, color );
        this.boxes = Tetrimino_J.create_I( position, color);
    }

    update () {
        super.update()
    }

    draw () {
        super.draw();
    }

    static create_I ( position, color ) {
        let part = [];
        part.push( new Box( position, color ));
        part.push( new Box( new Point2D(position.x-1, position.y), color ));
        part.push( new Box( new Point2D(position.x+1, position.y), color ));
        part.push( new Box( new Point2D(position.x+1, position.y+1), color ));
        return part;
    }
}