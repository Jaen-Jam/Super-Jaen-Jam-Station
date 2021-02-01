const Point2D = require('../utils/Point2D');
const Entity = require('./Entity');

class Tableboard extends Entity {

    /**
     * 
     * @param {Point2D} dimension 
     */
    constructor ( position, dimension, color, numCells ) {
        super(position, dimension, color);
        this.numCells = numCells;
    }

    /**
     * 
     */
    update () {
        super.update();
    }

    /**
     * 
     */
    draw () {
        super.draw();
    }
}

module.exports = Tableboard;