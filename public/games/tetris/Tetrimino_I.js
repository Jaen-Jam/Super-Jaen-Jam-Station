import Point2D from "./Point2D.js";
import Box from "./Box.js";
import Tetrimino from "./Tetrimino.js";


export default class Tetrimino_I extends Tetrimino {

    constructor ( position ) {

        let color = '#03eff1';
        super( position, color );
        this.boxes = Tetrimino_I.create_I( position, color);
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
        part.push( new Box( new Point2D(position.x+2, position.y), color ));
        return part;
    }
}