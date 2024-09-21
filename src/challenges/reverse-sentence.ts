/*
Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

*/

function reverseWords(input: string): string{
    return input.split(' ').reverse().join(' ');
  }