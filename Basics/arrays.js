 // Access array data with indexes //

 var array = [50, 60, 70];
 array[0]; // 50
 var data = array[1] // 60

 // Ex. 2 

 var bigArray = [60, 29, 1, 92, 71, 38, 1818, 212]
 var someNumber = bigArray[bigArray.length - 5]
 console.log(someNumber)

// Modify Array Data w/ Indexes 

var myArray = [18, 64, 99]; // Change the first value to 45
myArray[0] = 45;
console.log(myArray);

// Ex. 2

var dexChad = [10, 61, 42, 41, 12, 18, 14]
dexChad[1] = 99;
console.log(dexChad);

// Nesting arrays within another // 

var animalNumbers = [ [ "Bulls", 23], [ "Bears", 52] ]; // multi-dimensional array 
var meAndBrother = [ [ "Aaron", 24], [ "Eric", 20] ];
var someAnimals = [ [ "Dog", 9], [ "Cat",5] ]

console.log(animalNumbers + meAndBrother + someAnimals)

// Access multi-dimensional arrays w/ indexes

var arr = [ 
[1, 2, 3], 
[4, 5, 6], 
[7, 8, 9], 
[[10, 11, 12], 13, 14]
];
arr[3]; // [[10, 11, 12], 13, 14]
arr[3][0]; // [10, 11, 12]
arr[3][0][1]; // 11

// Manipulate arrays w/ push 

var arr1 = [1, 2, 3];
arr1.push(4);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]); // ["stimpson", "J", "cat", ["happy", "joy"]]

// Ex. 2 is

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop(); // used to 'pop' the value off the end of an array 
console.log(oneDown); 
console.log(threeArr);

// Manipulate arrays with pop // 

var myArray = [["John, 23"], ["Kate", 42]]
removedFromMyArray = myArray.pop();
console.log(removedFromMyArray); // Removes entire object - so in this example: ["Kate", 42]

// Ex. 2 -

var bigHat = [["Hat 1", 90],["Hat 2", 1000]]
var biggestHat = bigHat.pop();
console.log(biggestHat)

// Manipulate arrays w/ shift //

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
console.log(removedFromOurArray);

// Ex. 2 - 

var bigShift = [["Big Cat", 61], ["Small Cat", 2], "What even is this array?"]
bigShiftCompleted = bigShift.shift();
console.log(bigShiftCompleted); // ["Big Cat", 61]

// Manipulate arrays w/ unshift //

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // Removes first value 
ourArray.unshift("Happy"); // Places new value at the front of the Array
console.log(ourArray); 


