import Point2D from "./Point2D.js";
import Box from "./Box.js";
import Tetrimino from "./Tetrimino.js";


export default class Tetrimino_T extends Tetrimino {

    constructor ( position ) {

        let color = '#9f01f3';
        super( position, color );
        this.boxes = Tetrimino_T.create( position, color);
    }

    update () {
        super.update()
    }

    draw () {
        super.draw();
    }

    static create ( position, color ) {
        let part = [];
        part.push( new Box( position, color ));
        part.push( new Box( new Point2D(position.x+1, position.y+1), color ));
        part.push( new Box( new Point2D(position.x, position.y+1), color ));
        part.push( new Box( new Point2D(position.x-1, position.y+1), color ));
        return part;
    }
}