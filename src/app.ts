// Suppose you have the following functions

// function getRandomNumber(items: number[]):number {
//     let random = Math.floor(Math.random() * items.length);
//     return items[random];
// }

// const numbers: number[] = [1,2,35];
// console.log(getRandomNumber(numbers))

// function getRandomString(items: string[]): string {
//     let random = Math.floor(Math.random() * items.length);
//     return items[random];
// }

// const colors: string[] = ['red','green','blue'];

// console.log(getRandomString(colors))

// With generics we can solve this issue

// function getRandomElement<Type>(items: Type[]):Type {
//     let random = Math.floor(Math.random() * items.length);
//     return items[random];
// }

// const colors: string[] = ['red','green','blue'];
// const numbers: number[] = [1,2,35];

// console.log(getRandomElement<string>(colors));
// console.log(getRandomElement<number>(numbers));

// Multipe types

// function merge<U,V>(obj1: U, obj2: V) {
//     return {
//         ...obj1,
//         ...obj2
//     }
// }

// const result = merge(
//     {name:'Manzi'},
//     {jobtitle:'frontedn'}
// )
// const result2 = merge(
//     {name:'Manzi'},
//     42
// )

// console.log(result)
// console.log(result2)


// Generic constraints

// function merge<U extends object,V extends object>(obj1: U, obj2: V) {
//     return {
//         ...obj1,
//         ...obj2
//     }
// }

// const result = merge(
//     {name:'Manzi'},
//     {jobtitle:'frontedn'}
// )
// const result2 = merge(
//     {name:'Manzi'},
//     42
// )

// console.log(result)
// console.log(result2)