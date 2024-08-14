/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items 
 without any elements with the same value next to each other and preserving the original order of elements.

 For example:
    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

    export function uniqueInOrder (iterable: string | (string | number)[]):(string | number)[] | void{
        const arr = typeof iterable === 'string' ? iterable.split('') : iterable;
        let result : (string | number)[] = arr.length > 0 ? [arr[0]]: [];
        for(let i = 1; i < arr.length; i++){
          if(arr[i] !== arr[i -1]){
            result.push(arr[i])
          }
        }
        return result;
      };
