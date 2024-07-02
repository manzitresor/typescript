"use strict";
// data Types
let id = 5;
let myName = 'Manzi';
let age = 32;
// Arrays
let ids = [1, 2, 3, 4];
let arr = [1, 'manzi', true];
//  Tuples
let person = [1, 'manzi', true];
let employee;
employee = [
    [1, 'Ramona'],
    [2, 'Albert']
];
// Union
let unionID;
unionID = 2;
// enums
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
const obj = {
    id: 1,
    name: 'manzi'
};
// Type assertion
let cid;
// let customId = <number>cid;
let customId = cid;
customId = 12;
// Functions
function addNumber(num1, num2) {
    return num1 + num2;
}
console.log(addNumber(4, 5));
function log(message) {
    console.log(message);
}
log('Hello world!');
const user1 = {
    id: 1,
    name: 'manzi'
};
let InterfaceNum = (x, y) => x + y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getName() {
        return `Hello ${this.name}`;
    }
}
const person1 = new Person(1, 'Manzi');
console.log(person1);
