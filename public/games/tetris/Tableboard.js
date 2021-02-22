import Point2D from "./Point2D.js";
import Entity from "./Entity.js";
import Game from "./Game.js";
import Box from "./Box.js";
import Tetrimino_I from "./Tetrimino_I.js";
import Tetrimino_J from "./Tetrimino_J.js";
import Tetrimino_L from "./Tetrimino_L.js";
import Tetrimino_O from "./Tetrimino_O.js";
import Tetrimino_S from "./Tetrimino_S.js";
import Tetrimino_T from "./Tetrimino_T.js";
import Tetrimino_Z from "./Tetrimino_Z.js";


export default class Tableboard extends Entity {

    constructor () {
        let center = new Point2D(
            Math.round(Game.instance.numCell.x/2),
            Math.round(Game.instance.numCell.y/2));
        super( center, '#6e6a69');
        this.minX = center.x - 5;
        this.minY = center.y - 10;
        this.maxX = center.x + 4;
        this.maxY = center.y + 9;
        this.frame = Tableboard.createFrame( center );
        this.content = Tableboard.createContent( this.minX, this.minY );
    }

    update () {

    }

    draw () {
        for ( let i = 0; i < this.frame.length; i++ ) {
            this.frame[i].draw();
        }
        for ( let i = 0; i < this.content.length; i++ ) {
            for ( let j = 0; j < this.content[i].length; j++ ) {
                this.content[i][j].draw();
            }
        }
    }

    static createFrame ( center ) {
        let frame = [];
        for ( let i = center.x - 6; i < center.x + 6; i++) {
            frame.push( new Box(new Point2D(i, center.y - 11), '#6e6a69'));
            frame.push( new Box(new Point2D(i, center.y + 10), '#6e6a69'));
        }
        for ( let i = center.y - 10; i < center.y + 10; i++) {
            frame.push( new Box(new Point2D(center.x - 6, i), '#6e6a69'));
            frame.push( new Box(new Point2D(center.x + 5, i), '#6e6a69'));
        }
        return frame;
    }

    static createContent (minX, minY) {
        let cols = [];
        for ( let i = 0; i < 10; i++ ) {
            let rows = [];
            for ( let j = 0; j < 20; j++ ) {
                rows.push(new Box( new Point2D( minX + i, minY + j), '#babad7'));
            }
            cols.push(rows);
        }
        return cols;
    }

    newTetrimino () {
        let tetrimino = this.loadTetrimino();
        console.log(`minX: ${this.minX} - minY: ${this.minY}`);
        for ( let i = 0; i < tetrimino.boxes.length; i++ ) {
            console.log(tetrimino.boxes[i]);
            console.log(this.content);
            this.content[tetrimino.boxes[i].position.x][tetrimino.boxes[i].position.y].color = tetrimino.color;
        } 
    }

    loadTetrimino () {
        let position = new Point2D( this.content.length/2, 0);
        let rand = Math.floor(Math.random() * (7));
        switch (rand) {
            case 0:
                return new Tetrimino_I(position);
            case 1:
                return new Tetrimino_J(position);
            case 2:
                return new Tetrimino_L(position);
            case 3:
                return new Tetrimino_O(position);
            case 4:
                return new Tetrimino_S(position);
            case 5:
                return new Tetrimino_T(position);
            case 6:
                return new Tetrimino_Z(position);
        }
    }
}