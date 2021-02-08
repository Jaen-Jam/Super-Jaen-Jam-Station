import Entity from './Entity.js';

export default class Apple extends Entity {

    constructor ( position ) {
        super( position, '#ff0000');
    }

    update () {

    }

    draw ( gl ) {
        //let img = new Image(this.dimension.x, this.dimension.y);
        //img.src = '/images/apple.png';
        super.draw();
    }
}