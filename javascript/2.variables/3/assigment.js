// 1. Declaring Variables 

let age = 25;
const schoolName ="Greenwood High";
let studentsList=[];
// What is the difference between let, const, and var when declaring variables? 
//let- declaring a variable using let keyword means that the variable can be reassigned
//const- declaring a variable using const keyword means that the variable cannot be reassigned
//var- declaring a variable using var keyword means that the variable can be reassigned but is an old way of declaring variables and avoided in modern development 

// 2. Naming Conventions 
// Which of the following variable names is invalid? 
//let 1stPlace = "John"; 

// Why is the following variable name incorrect? 
// const #taxRate = 0.16; 
//when naming the variable # sysmbol is used at the start make the name invalid
// Rewrite this variable name to follow best practices: 
let MyvariableNAME = "JavaScript"; 
let myVariableName = "Javascript"

// 3. Identifying Data Types 
// What will be the output of the following? 
console.log(typeof "Hello"); 
console.log(typeof 99); 
console.log(typeof true); 
console.log(typeof undefined);

// output
//string
//number
//boolean
//undefined

// Identify the data types in this array: 
let data = ["Kenya", 34, false, { country: "USA" }, null];
//  "kenya" - String
//  34 - Number
//  false - Boolean
//  { country: "USA" } - Object
//  null - object

// How do you define a BigInt in JavaScript? Provide an example
let bigInt = 9000000000000000000n;

// 4. Objects & Arrays 
//  Create an object person with properties name, age, and city. 
//  Add a new property email to the person object. 
//  Declare an array fruits with three fruit names. 
// Access the second item in the fruits array. 
let person ={
    name:"kioko",age:21,city:"Nairobi"
};
person.email="urbanuskioko662@gmail.com";
let fruits = ["mango","orange","pineapple"];
console.log(fruits[1]);

// 5. Type Coercion 
// 15. What will be the output of the following? 
 console.log("5" + 2); //output: 52
 console.log("5" - 2); //output:3
//  16. Convert the string "100" into a number.
let num = Number("100");
// 17. Convert the number 50 into a string. 
let str = String(50);
// 18. What will be the result of this operation? 
console.log(5 + true);//6