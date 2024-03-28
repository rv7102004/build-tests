const calculateDistance = (point1, point2) => {
    let distanceX = point2.x - point1.x ** 2;
    let distanceY = point2.y - point2.y ** 2;
    const distance = Math.sqrt(distanceX + distanceY);
    return distance;
}

const calculateJunctionPoint = (line1, line2) => {

}
const calculateAngle = (line1, line2) => {

}

const calculateIncline = (point, point) => {

}

module.exports = {
    calculateDistance,
    calculateAngle,
    calculateIncline,
    calculateJunctionPoint
}