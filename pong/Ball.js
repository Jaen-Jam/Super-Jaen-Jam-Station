/**
 * 
 */
class Ball extends Entity {

    /**
     * 
     * @param {Point2D} position 
     * @param {Point2D} dimension 
     * @param {Number} speed 
     * @param {String} color 
     */
    constructor (  position, dimension, speed, color ) {

        super( position, dimension, speed, color );
        
        this.blip = new Audio();
        if ( this.blip.canPlayType('audio/mpeg')) {
            this.blip.src = 'blip.mp3';
        } else {
            this.blip.src = 'blip.ogg';
        }
    }

    /**
     * 
     */
    static defaultConstructor() {
        let dimesionAux = new Point2D(10, 10);
        let positionAux = new Point2D( game.dimension.x/2 - dimesionAux.x/2, game.dimension.y/2 - dimesionAux.y/2);
        let colorAux = "#f7ce2f";
        let speedAux = 7;
        let ballAux = new Ball( positionAux, dimesionAux, speedAux, colorAux);
        let minAngle = -30;
        let maxAngle = 30;
        let angle = Math.floor(Math.random() * (maxAngle - minAngle + 1)) + minAngle;
        let radian = Math.PI / 180;
        let velocityAux = new Point2D( speedAux * Math.cos(angle * radian), speedAux * Math.sin(angle * radian));
        if ( Math.random() > 0.5 ) velocityAux.x *= -1;
        ballAux.velocity = velocityAux;
        return ballAux;
    }

    /**
     * 
     */
    randVelocity () {
        let minAngle = -30;
        let maxAngle = 30;
        let angle = Math.floor(Math.random() * (maxAngle - minAngle + 1)) + minAngle;
        let radian = Math.PI / 180;
        let velocityAux = new Point2D( this.speed * Math.cos(angle * radian), this.speed * Math.sin(angle * radian));
        if ( Math.random() > 0.5 ) velocityAux.x *= -1;
        return velocityAux;
    }

    /**
     * 
     */
    reset () {
        this.position = new Point2D( game.dimension.x/2 - this.dimension.x/2, game.dimension.y/2 - this.dimension.y/2 );
        this.velocity = this.randVelocity();
    }

    /**
     * 
     */
    update () {
        //Detectamos si impacta con una de las palas
        let hitter;
        if ( this.intersect(game.entities['player']) ) {
            hitter = game.entities['player'];
        } else if ( this.intersect(game.entities['bot']) ) {
            hitter = game.entities['bot'];
        }
        //Si impacta calculamos la nueva direccion
        if ( hitter ) {
            this.velocity.x *= -1.1; // Cada vez que rebota aumentamos la velocidad
            this.velocity.y *= 1.1;
            // Pasamos algo de la velocidad que lleva la pala a la bola
            this.velocity.y += hitter.velocity.y / 4;
            this.apetecan();
        } else if ( this.position.y < 0 || this.position.y + this.dimension.y > game.dimension.y ) {
            // Detectamos si golpea en el borde de arriba o el de abajo
            this.velocity.y *= -1; //Cambiamos la direccion
            this.apetecan();
        } else if ( this.position.x + this.dimension.x > game.dimension.x ) {
            // Detectamos si golpea a la derecha
            game.entities['player'].score += 1;
            this.reset();
        } else if ( this.position.x < BasicGeo.ZERO ) {
            // Detectamos si golpea a la izquierda
            game.entities['bot'].score += 1;
            this.reset();
        }
        super.update();
    }

    /**
     * 
     */
    draw () {
        super.draw();
    } 

    /**
     * 
     */
    apetecan () {
        this.blip.play();
    }
}