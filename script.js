//alert("Hello, World!");

// let input = document.getElementById("inputField");
// input.value = "Enter your name here";

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

//28/07/26

//arithmetic operators
let num3 = 10;
let num4 = 3;
let sum1 = num3 + num4;
console.log(sum1);
console.log(num3 % num4); //1

//subtraction
let difference = num3 - num4;
console.log(difference); //7

//multiplication
let product = num3 * num4;
console.log(product); //30

//division
let quotient = num3 / num4;
console.log(quotient); //3.3333

//exponentiation
let power = num3 ** num4;
console.log(power); //1000
let p = 2 ** 3;
console.log(p); //8

//qotient and remainder
let quotient1 = Math.floor(num3 / num4);
let remainder = num3 % num4;
console.log(quotient1);
console.log(remainder);

//assignment operators
let num5 = 10;
num5 += 5;
console.log(num5); //15

//increment operators
let num6 = 5;
num6++;
console.log(num6); //6

//pre-increment operator
let num8 = 5;
console.log(++num8); //6

//post-increment operator
let num9 = 5;
console.log(num9++); //5

//decrement operators
let num7 = 5;
num7--;
console.log(num7); //4

//the += operator is used to add a value to a variable and assign the result back to that variable. For example, if you have a variable `num` with an initial value of 10, using `num += 5;` will add 5 to `num`, resulting in a new value of 15. This operator is a shorthand for `num = num + 5;`.
//the -= operator is used to subtract a value from a variable and assign the result back to that variable. For example, if you have a variable `num` with an initial value of 10, using `num -= 5;` will subtract 5 from `num`, resulting in a new value of 5. This operator is a shorthand for `num = num - 5;`.

//comma operator
let x1 = 1;
let y1 = 2;
let z1 = (x1++, y1++);
console.log(z1); //2
//explain comma operator
//The comma operator in JavaScript allows you to evaluate multiple expressions and return the value of the last expression. When you use the comma operator, each expression is evaluated from left to right, but only the result of the last expression is returned.
let result = (5, 10, 20);

console.log(result); // 20

//typeof operator
//The `typeof` operator in JavaScript is used to determine the data type of a variable or expression. It returns a string indicating the type of the operand. The possible return values include "undefined", "object", "boolean", "number", "bigint", "string", "symbol", and "function".
let variable = "Hello, World!";
console.log(typeof variable); //string
//more example of typeof
let num = 42;
console.log(typeof num); //number

let isTrue = true;
console.log(typeof isTrue); //boolean

//comparison operators
let num10 = 10;
let num11 = 5;
console.log(num10 > num11);

//more comparison operators
console.log(num10 < num11);
console.log(num10 >= num11);
console.log(num10 <= num11);
console.log(num10 == num11);
//strict equality operator
console.log(num10 === num11);
console.log(num10 != num11);
//strict inequality operator
console.log(num10 !== num11);

let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue1 > isFalse1); //true
console.log(isTrue1 < isFalse1); //false

//logical operators
let a1 = true;
let b1 = false;
console.log(a1 && b1);
console.log(a1 || b1);
console.log(!a1);

//30/07/2026
//conditional statements
//what is conditional statements
//Conditional statements are used to perform different actions based on different conditions. They allow you to control the flow of your program by executing certain blocks of code only when specific conditions are met. The most common conditional statements in JavaScript are `if`, `else if`, and `else`.
//if statement
let age2 = 18;
if (age2 >= 18) {
  console.log("You are an adult.");
}

let age3 = 16;
if (age3 >= 18) {
  console.log("You can drive.");
}

//if-else statement
let age4 = 16;
if (age4 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

let age5 = 20;
if (age5 >= 18) {
  console.log("you are eligible to vote");
} else {
  console.log("you are not eligible to vote");
}

//else if statement
let age6 = 20;
if (age6 >= 18) {
  console.log("You are an adult.");
} else if (age6 >= 16) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}

let score = 90;
if (score >= 90) {
  console.log("You got an A.");
} else if (score >= 80) {
  console.log("You got a B.");
} else if (score >= 70) {
  console.log("You got a C.");
} else if (score >= 60) {
  console.log("You got a D.");
} else {
  console.log("You got an F.");
}

//Ternary operator
let age7 = 20;
let canVote1 = age7 >= 18 ? "Yes" : "No";
console.log(canVote1); //Yes

let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log(discount); //0.1
