class Point {
    constructor({x=0, y=0}={}) {
        this.x = x;
        this.y = y;
    }
    moveVertical(value) {
        this.y += value;
    }
    moveHorizontal(value) {
        this.x += value;
    }
}

module.exports = Point