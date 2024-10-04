/* 
In this Kata, you will be given a string and your task will be to return a list 
of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

EXAMPLE: 
Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
*/

function solve(s: string): number[]{
    let upperLetters = 0, lowerLetters = 0, numbers = 0, specialChar = 0;
    const result: number[] = [];
    for(let char of s){
      if(/[A-Z]/.test(char)){
          upperLetters += 1;
         } else if(/[a-z]/.test(char)){
           lowerLetters += 1;
         } else if(/[0-9]/.test(char)) {
           numbers += 1
          } else {
            specialChar += 1
          }
    }
    return [upperLetters,lowerLetters, numbers, specialChar]
  }