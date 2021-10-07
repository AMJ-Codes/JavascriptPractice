// Lesson 1: Find the Length of a String //

// Example 

console.log("Alan Peter".length); // 10
var firstName = 'Ada';
console.log(firstName.length); // 3

// Setup 
var lastNameLength = 0; 
var lastName = 'Lovelace';

console.log(lastName.length)
lastNameLength = lastName.length // output 8

// Lesson 2: Bracket notation to find specific poinst in a string //

var lastName = 'Jefferson'
var middleLetter = lastName[4] // Remember that length starts at '0'

console.log(middleLetter)

var myName = 'Aaron Jefferson'
var space = myName[5]

console.log(space) // It will appear to outputting 'nothing', but this is the space.

// Lesson 3: Quoting strings with single quotes //

goodString = 'I asked a friend, \"Do I look good in this shirt?"'; // Note the proper use of the single and double quotation.
betterString = '\"Hey," I asked blandly, \"Did you leave the stove on?"'

console.log(goodString)
console.log(betterString)

hRefExample = '<a href="http://happywebsite.com" target="_blank">This stinks.<a>'

// Lesson 4: Escape Sequences in Strings //

/* Listed are various string escapes:
    \' single quote 
    \" double quote
    \\ backslash
    \n newline 
    \r carriage return 
    \t tab 
    \b word boundary 
    \f form feedback
*/

// Example: 

var myStr = 'Hello\n\t\\ThisAin\'t\nAsEasyAsItSeems'
console.log(myStr)





