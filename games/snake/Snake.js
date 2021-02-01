const Entity = require('./Entity');
const Bone = require('./Bone.js');

class Snake extends Entity {

    constructor ( position, dimension, color ) {
        super(position, dimension, color);
        this.body = [new Bone(position, dimension, color)];
    }

    update () {
        for ( const entityKey in this.body ) 
            this.body[entityKey].update();
    }

    draw () {
        for ( const entityKey in this.body ) 
            this.body[entityKey].draw();
    }
}