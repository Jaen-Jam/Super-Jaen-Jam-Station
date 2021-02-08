import Game from './Game.js';

let canvas = document.getElementById('canvas-snake');
const game = new Game(canvas);
game.init();
game.draw();

