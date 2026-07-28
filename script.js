alert("Hello, World!");

let input = document.getElementById("inputField");
input.value = "Enter your name here";

//variable declaration
let username;
username = "john";
console.log(username);
const pi = 3.14;
console.log(pi);

//data types
let name = "John"; //string
let age = 30; //number
let isStudent = true; //boolean
let sum = `20 ${2 + 3}`; //template literal
console.log(sum);

console.log(10 / 0); //infinity
console.log("10" / "2");
//NAN
console.log("Hello" / 2); //NaN

//Null and undefined
let emptyValue = null;
console.log(emptyValue); //null

let notDefined;
console.log(notDefined); //undefined

//Unary operators
let x = 5;
console.log(++x); //6

//binary operators
let a = 10;
let b = 5;
console.log(a + b); //15

//ternary operator
let age1 = 18;
let canVote = age1 >= 18 ? "Yes" : "No";
console.log(canVote); //Yes

//operators
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);

//arithmetic operators
let num3 = 10;
let num4 = 3;
let sum1 = num3 + num4;
console.log(sum1);
console.log(num3 % num4); //1
