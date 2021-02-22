import Entity from './Entity.js';
import Bone from './Bone.js';
import Point2D from './Point2D.js';
import Game from './Game.js';

export default class Snake extends Entity {

    constructor ( position, color ) {
        super(position, color);
        this.body = [new Bone(position, color)];
        this.score = 0;
        this.speed = .1;
        this.velocity = new Point2D(0, 0);
        this.grow = false;
    }

    static defaultConstructor () {
        console.log(Math.floor(Game.instance.numCell.x/2));
        return new Snake (
            new Point2D( 
                Math.floor(Game.instance.numCell.x/2),
                Math.floor(Game.instance.numCell.y/2)),
            '#00f'
        );
    }

    update () {
        if ( !this.checkHit() ) {
            let dir = Game.instance.keyPressed;
            switch (dir) {
                case 'LEFT':
                    this.moveLeft();
                break;
                case 'RIGHT':
                    this.moveRight();
                break;
                case 'UP':
                    this.moveUp();
                break;
                case 'DOWN':
                    this.moveDown();
                break;
                default:
                    this.moveStop();
                break;
            }
            this.checkApple();
            if ( this.velocity.x >= 1 ) {
                this.position.x += 1; 
                this.velocity.x = this.velocity.y = 0;
                this.updateBody();
                this.updateHead();
            }
            if ( this.velocity.x <= -1 ) {
                this.position.x -= 1; 
                this.velocity.x = this.velocity.y = 0;
                this.updateBody();
                this.updateHead();
            }
            if ( this.velocity.y >= 1 ) {
                this.position.y += 1; 
                this.velocity.y = this.velocity.x = 0;
                this.updateBody();
                this.updateHead();
            }
            if ( this.velocity.y <= -1 ) {
                this.position.y -= 1; 
                this.velocity.y = this.velocity.x = 0;
                this.updateBody();
                this.updateHead();
            }
        } else {
            Game.instance.gameover = true;
        }
    }

    draw () {
        for ( const entityKey in this.body ) {
            this.body[entityKey].draw();
        }     
    }

    checkApple () {
        if ( this.body[0].position.x == Game.instance.entities['apple'].position.x  && 
            this.body[0].position.y == Game.instance.entities['apple'].position.y ) {
                this.score += 1;
                Game.instance.newApple();
                this.grow = true;
                this.speed += .01;
            }
    }

    updateHead () {
        if ( this.grow ) {
            this.makeGrow();
            this.grow = false;
        } else {
            this.body[0].position = new Point2D( this.position.x, this.position.y);
        }
        
    }

    updateBody () {
        for ( let i = this.body.length - 1; i > 0; i-- ) {
            this.body[i].position = new Point2D(this.body[i-1].position.x, this.body[i-1].position.y);
            this.body[i].color = '#000';
        }
    } 

    checkLeft () {
        return this.position.x > 0;
    }

    checkRight () {
        return this.position.x < Game.instance.numCell.x-1;
    }

    checkUp () {
        return this.position.y > 0;
    }

    checkDown () {
        return this.position.y < Game.instance.numCell.y-1;
    }

    moveDown () {
        this.velocity.y += this.speed;
    }

    moveUp () {
        this.velocity.y -= this.speed;
    }

    moveRight () {
        this.velocity.x += this.speed;
    }

    moveLeft () {
        this.velocity.x -= this.speed;
    }

    moveStop () {
        this.velocity.x = 0;
        this.velocity.y = 0;
    }

    makeGrow () {
        this.body.unshift( new Bone( new Point2D(this.position.x, this.position.y), '#00f'));
    }

    checkHit () {
        if ( this.body[0].position.x >= Game.instance.numCell.x )
            return true;
        if ( this.body[0].position.x < 0 )
            return true;
        if ( this.body[0].position.y >= Game.instance.numCell.y )
            return true;
        if ( this.body[0].position.y < 0 )
            return true;
        for ( let i = 1; i < this.body.length; i++ ) {
            if ( this.body[0].position.x == this.body[i].position.x &&
                this.body[0].position.y == this.body[i].position.y) {
                    return true;
                }
        }
    }
}