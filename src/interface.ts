// Before Interface
/*
function getFullName(person: {firstName: string,lastName: string}) {
    return  `${person.firstName} ${person.lastName}`
}

let person = {
    firstName: 'manzi',
    lastName: 'tresor'
}

console.log(getFullName(person))
*/

// Using interface

interface Person {
    firstName: string, 
    readonly lastName: string
}

function getFullName(person: Person): string {
    return  `${person.firstName} ${person.lastName}`
}

const person: Person = {
    firstName: 'manzi',
    lastName: 'tresor'
}
person.firstName = 'Divine'
console.log(getFullName(person))

// Extending interface

