
class Paddle extends Entity {

    constructor ( position, dimension, speed, color ) {
        super( position, dimension, speed, color);

        this.score = 0;
    }

    update () {
        this.position.y = Math.min(Math.max(this.position.y, 0), game.dimension.y - this.dimension.y);
        super.update();
    }

    draw () {
        super.draw();
    }

    moveUp () {
        this.velocity.y = -this.speed;
    }

    moveDown () {
        this.velocity.y = this.speed;
    }

    moveStop() {
        this.velocity.y = 0;
    }
}