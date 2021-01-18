
class Ball extends Entity {

    constructor ( canvas, position, dimension, speed, color ) {

        super( canvas, position, dimension, speed, color );
        
        this.blip = new Audio();
        if ( this.blip.canPlayType('audio/mpeg')) {
            this.blip.src = 'blip.mp3';
        } else {
            this.blip.src = 'blip.ogg';
        }
    }

    static defaultConstructor(canvas) {
        let dimesionAux = new Point2D(10, 10);
        let positionAux = new Point2D( canvas.width/2 - dimesionAux.x/2, canvas.height/2 - dimesionAux.y/2);
        let minAngle = -30;
        let maxAngle = 30;
        let angle = Math.floor(Math.random() * (maxAngle - minAngle + 1)) + minAngle;
        let radian = Math.PI / 180;
        let velocityAux = new Point2D( this.speed * Math.cos(angle * radian, this.speed * Math.sin(angle * radian)));
        if ( Math.random() > 0.5 ) velocityAux.x *= -1;
        let colorAux = "#f7ce2f";
        let speedAux = 7;
        let ballAux = new Ball(canvas, positionAux, dimesionAux, speedAux, colorAux);
        ballAux.velocity = velocityAux;
        return ballAux;
    }

    update () {
        super.update();
    }

    draw () {
        super.draw();
    } 

    apetecan () {
        this.blip.play();
    }
}