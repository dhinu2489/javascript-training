/*

Every javascript code gets executed in --> javascript engine

Javascript engine consists of 3 parts
1. Parser
2. Machine Code Converter
3. Executor

Javascript code gets executed in Execution conexts arranged in a Execution stack. Excecution conexts are of two types:
1. Global Execution Contexts --> Global Execution contexts are the ones that hold code that is not inside any functions
2. Execution Context --> Execution contexts that are created for each funciton call
3. Execution stack --> stack/array of execution contexts.

Exection contexts contains two phases:

1. Creation phase
2. Execution Context

Each Execution contexts contains 3 parts

1. Variable Object /VO
2. Scope Chain
3. this

*/

/*

Hoisting Rules:
1. All variables are  hoisted to the top of their scope.
2. All functions except function expressions are hoisted to the top of the scope.
*/

//Testing Hoisting  - in Variables.

//Global execution context - available in Variable object of Global Execution context.
var age = 23;
//should print correct value.
console.log(age);


//trying to print myage before the variable declartion - Hoisting makes variable myAge=undefined during the creation phase.
//value should be undefined
console.log(myAge);
var myAge=28;
console.log(myAge); //should print correct value now since the assignment is made in previous line.



//Testing Hositing  - in functions
//calling before declaration  -  getAge gets a new execution context. Global execution context already has variable object pointing to the function getAge().
getAge(1959);
function getAge(year){
  console.log(2017-year);  
}

getAge(1959);


//summary - calling function that is in global execution context before or after the function declaration doesn't really matter.


//Now doing the above process for function expression
//calculatedAge(2015); - will not be recognized as a function because global execution context contains variable object with calculatedAge variable poiting to undefined during the creation phase. throws not a function when called before the assignment.
var calculatedAge = function(year){
   console.log(2016-year); 
}

calculatedAge(2015);



