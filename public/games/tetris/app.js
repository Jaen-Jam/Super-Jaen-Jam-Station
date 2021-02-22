import Tableboard from './Tableboard.js';
import Game from './Game.js';
import Tetrimino_T from './Tetrimino_T.js';
import Point2D from './Point2D.js';

let canvas = document.getElementById('canvas-tetris');
const game = new Game(canvas);
game.addEntity('tableboard', new Tableboard() );
game.addEntity('tetrimino', new Tetrimino_T( new Point2D(Math.round(game.numCell.x/2), Math.round(game.numCell.y/2) )));
game.entities['tableboard'].newTetrimino();
game.initKeyEvent();
game.start();

