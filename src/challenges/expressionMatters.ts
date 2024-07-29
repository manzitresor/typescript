/*
Example
With the numbers 1, 2, and 3, here are some possible expressions:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
The maximum value that can be obtained is 9.

Input and Output Examples
expressionsMatter(1, 2, 3) ==> 9, because (1 + 2) * 3 = 9.
expressionsMatter(1, 1, 1) ==> 3, because 1 + 1 + 1 = 3.
expressionsMatter(9, 1, 1) ==> 18, because 9 * (1 + 1) = 18.
*/

export function expressionsMatter(a: number, b: number, c: number): number {
    const add:number = a + b + c;
    const mult: number = a * b * c;
    const bracket: number = a * (b + c);
    const addMult: number = (a + b) * c;
   const expression = [add,mult,bracket,addMult];
   return Math.max(...expression)
 }