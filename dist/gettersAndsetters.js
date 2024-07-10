"use strict";
class Person {
    constructor(age, firstName, lastName) {
        this._age = age;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get getAge() {
        return this._age;
    }
    set setAge(theAge) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }
}
let person = new Person(26, 'Manzi', 'Tresor');
// console.log(person);
person.setAge = 200;
console.log(person);
