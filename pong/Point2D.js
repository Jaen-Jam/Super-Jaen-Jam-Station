
class Point2D {


    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * 
     * @param {Point2D} p0 
     * @returns {Point2D}
     */
    static copyConstructor( p0 ) {
        return new Point2D( p0.x, p0.y)
    }

    /**
     * 
     * @param {Point2D} p1 
     */
    add ( p1 ) {
        return new Point2D( this.x + p1.x, this.y + p1.y);
    }

    /**
     * 
     * @param {Point2D} p1 
     */
    sub ( p1 ) {
        return new Point2D( this.x - p1.x, this.y - p1.y);
    }

    equal ( p1 ) {
        return Math.abs(this.x - p1.x) < BasicGeo.ZERO && Math.abs(this.y - p1.y) < BasicGeo.ZERO;
    }
}