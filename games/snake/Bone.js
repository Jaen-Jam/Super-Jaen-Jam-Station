const Point2D = require('../../utils/Point2D');
const Entity = require('./Entity');

class Bone extends Entity {

    /**
     * 
     */
    constructor (position, dimension, color, coord) {
        super( position, dimension, color);
        this.coord = coord;
    }

    update () {
        super.update();
    }

    draw () {
        super.draw();
    }
}