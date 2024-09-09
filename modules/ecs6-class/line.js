const Point = require("./point");

class Line {
    constructor({ point1 = new Point(), point2 = new Point(), n = undefined, slope = undefined }={}) {
        if (!(point1 instanceof Point) || !(point2 instanceof Point)) {
            throw new Error('the point must be point type')
        }
        if ((typeof (n) != "number" && typeof (n) != 'undefined') || (typeof (slope) != "number" && typeof (slope) != 'undefined')) {
            throw new Error('the n and slope must be number type')
        }
        this.point1 = point1;
        this.point2 = point2;
        this.slope = slope;
        this.n = n;
    }

    calculateSlope = () => {
        this.slope = (this.point1.y - this.point2.y) / (this.point1.x - this.point2.x)
    }

    calculateNOfLineFunction = () => {
        this.n = this.point1.y - this.slope * this.point1.x
    }

    getPointOnXAsis() {
        return this.getPointByY(0)
    }

    getPointOnYAsis() {
        return this.getPointByX(0)
    }


    getPointByX(x) {
        if (!x && x != 0 ) {
            throw new Error('not data')
        }
        if (typeof (x) != 'number') {
            throw new Error('the parameter must be number type')
        }
        let y = this.slope * x + this.n
        return new Point({ x, y })
    }

    getPointByY(y) {
        if (!y && y!=0) {
            throw new Error('not data')
        }
        if (typeof (y) != 'number') {
            throw new Error('the parameter must be number type')
        }
        let x = (y - this.n) / this.slope;
        return new Point({ x, y })
    }
}

module.exports = Line