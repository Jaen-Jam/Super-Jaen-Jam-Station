let canvas = document.getElementById('canvas-pong');
var game = new Game(canvas);
game.entities['background'] = Background.defaultConstructor();
game.entities['ball'] = Ball.defaultConstructor();
game.entities['player'] = Player.defaultConstructor();
game.entities['bot'] = Bot.defaultConstructor();
game.initKeyEvent();
game.start();