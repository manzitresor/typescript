/*

DESCRIPTION:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

export function doubleChar(str: string): string{
    const newStr: string = str.split('').map((el)=> el + el).join('');
    return newStr;
  }