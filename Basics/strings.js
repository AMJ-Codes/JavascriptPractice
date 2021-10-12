// Lesson 1: Find the Length of a String //

// Example 

console.log("Alan Peter".length); // 10
var firstName = 'Ada';
console.log(firstName.length); // 3

var thisIsALongString = "Hey, this is a super long string; a super messy one at that. How long can we make this thing?"
console.log(thisIsALongString.length); 

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

// Concatenation of Strings //

var partOne = "This is a long string,";
var partTwo = " eh? Yeah, I think so too.";
console.log(partOne + partTwo);

myStrCombo = "Hey, guess what" + ", this is another way to write a string (sentence)...";
console.log(myStrCombo);

// Appending Variables w/ Strings //

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
console.log(ourStr += anAdjective);

var letsWrite = "Boy, is it fun to write sometimes, "
var agreement = "Wouldn\'t you agree, John?"
console.log(letsWrite += agreement);

var stringwriting = '"I\'m not the biggest fan of writing strings with quotes", said'
var speaker = ' the baker\'s child. "That\'s why I just bake bread."'
console.log(stringwriting += speaker)

// String Immutability //

var firstName = "Aaron"; // contents of variable cannot be altered
firstName[0] = "F"; 
console.log(firstName); // No change

var immutableTest = "Jello World";
immuatableTest = "Hello World"; // var can be changed by being redeclared.
console.log(immuatableTest); 

var bigChungus = "Fig Chungus";
bigChungus = "Big Chungus";

// Using Bracket Notation to Find the Nth Character of a String // 

var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName); // output 'd'

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName); // output 'v'

var someWord = "Happy";
var firstLetter = someWord[0];
console.log(firstLetter); // output 'H'

// Use Bracket Notation to Find the Last Character in a String // 

var firstName = "Ada";
var lastLetter = firstName[firstName.length - 1];
console.log(lastLetter);

var myLastName = "Jefferson";
var myLastNameLength = myLastName[myLastName.length - 1 ]
console.log(myLastNameLength)

// Finding the Nth to Last Letter in a String //

// Same principle as finding the last letter in a string, but staggered.

var findTheS = "Pasta";
var findTheSLength = findTheS[findTheS.length - 3]; // don't forget the .length
console.log(findTheSLength)

// Array/Object destructuring //

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

// const a = alphabet[0]
// const b = alphabet[1]


// spread operator 

const [a,, c, ...rest] = alphabet
const newArray = [...alphabet, ...numbers]

console.log(newArray)
















