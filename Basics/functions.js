// Lesson 1: Writing usable functions //

function reusableFunction() {
    console.log("Hi World!");
}

reusableFunction()


// Ex 2 - 

function bigFunction() {
    console.log("THIS IS A BIG FUNCTION!");
}

bigFunction();

// Lesson 2: Passing Values to Functions with Arguments //

function testFun(param1, param2) {
    console.log(param1, param2);
}

testFun("Hello", "World"); // param 1 is Hello, param 2 is World.

// Example 2 -

function functionWithArgs(param1, param2) {
    console.log(param2, param1);
  }
  
  functionWithArgs("This is", "Backwards")

// Example 3 -

function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
  }
  
  functionWithArgs(1, 2)
  functionWithArgs(7, 9)

// Lesson 3: Global Scopes and Functions with // functions

var myGlobal = 10; 

console.log(myGlobal)

function fun1 () {
  oopsGlobal = 5;
}

console.log(oopsGlobal)

// Lesson 4: Arguments w/ a returned variable // 

// Setup //

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7) // Output 2

// Lesson 5: 

function nextInLine(arr, item) {
  return testArr.pop[1] 
}

// Setup //

var testArr = [1, 2, 3, 4, 5]

console.log(testArr.pop[2])