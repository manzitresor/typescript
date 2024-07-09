"use strict";
// // data Types
// let id: number = 5;
// let myName: string = 'Manzi';
// let age: any = 32
// // Arrays
//  let ids: number[] = [1,2,3,4];
//  let arr: any[] = [1,'manzi',true];
// //  Tuples
// let person: [number,string,boolean] = [1,'manzi',true];
// let employee: [number,string][]
// employee= [
//     [1,'Ramona'],
//     [2,'Albert']
// ]
// // Union
// let unionID: string | number
// unionID = 2 
// // enums
// enum direction {
//     up,
//     down,
//     left,
//     right
// }
// // Objects
// type User = {
//     id: number,
//     name: string
// }
// const obj:User = {
//     id: 1,
//     name:'manzi'
// }
// // Type assertion
// let cid: any
// // let customId = <number>cid;
// let customId = cid as number;
// customId = 12;
// // Functions
// function addNumber(num1:number,num2:number):number {
//     return num1 + num2;
// }
// console.log(addNumber(4,5))
// function log(message: string | number) :void{
//     console.log(message)
// }
// log('Hello world!')
// // Interfaces
// // 1. INTERFACE WITH OBJECTS
// interface userInterface {
//     id: number,
//     name: string
// }
// const user1: userInterface = {
//     id: 1,
//     name: 'manzi'
// }
// // 2. INTERFACE WITH FUNCTIONS
// interface MathFunc {
//     (x: number, y: number): number
// }
// let InterfaceNum:MathFunc = (x:number,y:number):number => x + y;
// // Classes
// // class Person {
// //     id: number;
// //     name: string;
// //     constructor(id:number,name:string) {
// //         this.id = id;
// //         this.name = name;
// //     }
// //     getName() {
// //         return this.name;
// //     }
// // }
// // Interface with classes
// interface personType {
//     id: number,
//     name: string,
//     getName(): string
// }
// class Person implements personType {
//     id: number;
//     name: string;
//     constructor(id:number,name:string) {
//         this.id = id;
//         this.name = name;
//     }
//     getName() {
//         return `Hello ${this.name}`;
//     }
// }
// const person1 = new Person(1,'Manzi')
// console.log(person1)
