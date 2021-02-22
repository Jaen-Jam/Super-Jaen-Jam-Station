import Entity from "./Entity.js";



export default class Tetrimino extends Entity {

    constructor ( position, color ) {
        super( position, color );
        this.boxes = [];
    }

    update () {
        for ( let i = 0; i < this.boxes.length; i++ ) {
            this.boxes[i].update();
        }
    }

    draw () {
        for ( let i = 0; i < this.boxes.length; i++ ) {
            this.boxes[i].draw();
        }
    }
}