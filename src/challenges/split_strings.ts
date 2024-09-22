/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str:string):string[]{
    const result: string [] = [];
    str = str.length % 2 !== 0 ? str + '_' : str;
    
    for (let i = 0; i < str.length; i += 2) {
       result.push(str[i] + str[i + 1]);
     }
   
     return result;
   }
