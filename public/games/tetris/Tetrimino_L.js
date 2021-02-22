import Point2D from "./Point2D.js";
import Box from "./Box.js";
import Tetrimino from "./Tetrimino.js";


export default class Tetrimino_L extends Tetrimino {

    constructor ( position ) {

        let color = '#efa000';
        super( position, color );
        this.boxes = Tetrimino_L.create_L( position, color);
    }

    update () {
        super.update()
    }

    draw () {
        super.draw();
    }

    static create_L ( position, color ) {
        let part = [];
        part.push( new Box( position, color ));
        part.push( new Box( new Point2D(position.x+1, position.y), color ));
        part.push( new Box( new Point2D(position.x-1, position.y), color ));
        part.push( new Box( new Point2D(position.x-1, position.y+1), color ));
        return part;
    }
}