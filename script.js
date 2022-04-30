let sum = 0
function getAreaOfCircle(radius) {
    sum = Math.PI * (radius * radius);
    return `The area of the circle is ${sum}`
}
function getCircumferenceOfCircle(radius) {
    sum = 2 * Math.PI * radius;
    return `The circumference of the circle is ${sum}`
}
function getAreaOfSquare(side) {
    sum = side * side;
    return `The area of the square is ${sum}`
}
function getAreaOfTriangle(base, height) {
    sum = .5 * base * height;
    return `The area of the triangle is ${sum}`
}
console.log(getAreaOfCircle(17));
console.log(getCircumferenceOfCircle(100));
console.log(getAreaOfSquare(8));
console.log(getAreaOfTriangle(10, 10));