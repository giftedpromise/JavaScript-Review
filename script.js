//alert("Hello, World!");

//const { forwardRef } = require("react");

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

//switch statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
  case 2:
    console.log("Tuesday");
  case 3:
    console.log("Wednesday");
  case 4:
    console.log("Thursday");
  case 5:
    console.log("Friday");
  case 6:
    console.log("Saturday");
  case 7:
    console.log("Sunday");
}

//functions
//what is function
// A function is a block of code that performs a specific task. It can take input in the form of parameters, execute a series of statements, and optionally return a value. Functions help organize code, promote reusability, and improve readability.
//  In JavaScript, functions can be defined using the `function` keyword or as arrow functions.

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));

function add(a, b) {
  return a + b;
}

let sum3 = add(5, 3); //8
console.log(sum3);

//fuction declaration
//A function declaration defines a function with the function keyword followed by a function name.
function multiply(a, b) {
  return a * b;
}

//function expression
//A function expression stores a function inside a variable.
const divide = function (a, b) {
  return a / b;
};

const greet2 = function () {
  console.log("Hello, World!");
};

//callback function
//A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
//  It allows for asynchronous programming and event handling.
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" };
    callback(data);
  }, 1000);
}

fetchData(function (data) {
  console.log("Data received:", data);
});

//arrow function
//An arrow function is a concise way to write functions in JavaScript using the `=>` syntax. It does not have its own `this` context and is often used for shorter functions or callbacks.
const add1 = (a, b) => a + b;

//more example of arrow function
const multiply1 = (a, b) => a * b;
const divide1 = (a, b) => a / b;

const greet1 = (name) => `Hello, ${name}!`;
console.log(greet1("Alice")); //Hello, Alice!

//more example of arrow function
const square = (x) => x * x;
console.log(square(5)); //25

//global and local scope
//Global scope refers to variables that are accessible from anywhere in the code,
// while local scope refers to variables that are only accessible within the function or block in which they are defined.
//  Variables declared outside of any function or block have global scope,
//  while variables declared inside a function or block have local scope.

//example of global and local scope
let globalVar = "I am a global variable";
function exampleFunction() {
  let localVar = "I am a local variable";
  console.log(globalVar); // Accessible
  console.log(localVar); // Accessible
}
exampleFunction();
console.log(globalVar); // Accessible
//console.log(localVar); // Not Accessible

//Javascript Objects
//An object is a collection of properties, where each property is a key-value pair.
//  Objects are used to store and organize data in JavaScript.
//  They can contain various data types, including other objects, arrays, functions, and primitive values.
//creating an object
let person = {
  name: "John",
  age: 30,
  isStudent: false,
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};
console.log(person);
console.log(person.name); //John
console.log(person.age); //30
person.greet(); //Hello, my name is John.

//creating an object using new Object()
let car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;
car.start = function () {
  console.log("Car started.");
};

console.log(car.make); //Toyota
console.log(car.model); //Camry
console.log(car.year);

//Accessing object properties
//Object properties can be accessed using dot notation or bracket notation.
console.log(person.name); //John
console.log(person["age"]); //30

//adding and modifying object properties
person.gender = "Male"; //adding a new property

person.age = 31; //modifying an existing property
console.log(person.gender);

//deleting object properties
delete person.isStudent;
//Object methods
//Object methods are functions that are properties of an object.
person.greet = function () {
  console.log(`Hello, my name is ${this.name}.`);
};

const student = {
  name: "Alice",
  age: 20,
  major: "Computer Science",
  greet: function () {
    console.log(`Hello, my name is ${this.name} and I study ${this.major}.`);
  },
};

//Another way to create an object is by using a constructor function.
//  A constructor function is a special type of function that is used to create and initialize objects.
//  It is typically named with a capital letter to distinguish it from regular functions.

//object destructuring
//Object destructuring is a feature in JavaScript that allows you to extract values from objects and assign them to variables in a more concise and readable way.
//  It provides a convenient syntax for unpacking properties from objects into distinct variables.

const person1 = {
  name: "John",
  age: 30,
  isStudent: false,
  country: "USA",
};

const { name, age, country } = person1;
const { name } = person1;

console.log(name);
console.log(age);
console.log(country);

//you can rename the variables while destructuring by using a colon (:) followed by the new variable name.
const { name: personName, age: personAge, isStudent: studentStatus } = person1;
console.log(personName);

//you can give a default value to a variable while destructuring by using the assignment operator (=) followed by the default value.
const { name: personName1, age: personAge1, gender = "Male" } = person1;

//spread operator with objects
//The spread operator (...) allows you to create a new object by copying the properties of an existing object into it.
//  It provides a convenient way to merge objects or create shallow copies of objects.
const person2 = {
  name: "John",
  age: 30,
  isStudent: false,
};
const updatedPerson = { ...person2, age: 31, country: "USA" };
console.log(updatedPerson);

//Arrays in JavaScript
//An array is a special type of object that is used to store multiple values in a single variable.
//  Arrays are ordered collections of elements, and each element can be accessed using its index, which starts at 0.
//  Arrays can contain elements of different data types, including numbers, strings, objects, and even other arrays.

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);

//Accessing elements in an array
let color = ["Red", "Green", "Blue"];
console.log(color[1]); //Green

//Accessing the Last Array Element
let lastElement = color[color.length - 1];
console.log(lastElement); //Blue

const cars = ["Toyota", "Honda", "Ford"];
console.log(cars.length); //3

//JavaScript new Array()
let points = new Array(40, 100, 1, 5, 25, 10);
console.log(points);

//Array methods
//Array methods are built-in functions that allow you to manipulate and interact with arrays.

let numbers = [1, 2, 3, 4, 5];

//length property - returns the number of elements in the array
let size = numbers.length;
console.log(size);

console.log(numbers[2]);
numbers[3] = 10;
console.log(numbers); // [1, 2, 3, 10, 5]

//push() - adds an element to the end of the array
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

//pop() - removes the last element from the array
numbers.pop();
console.log(numbers); // [1, 2, 3, 4, 5]

//shift() - removes the first element from the array
numbers.shift();
console.log(numbers); // [2, 3, 4, 5]

//unshift() - adds an element to the beginning of the array
numbers.unshift(1);
console.log(numbers); // [1, 2, 3, 4, 5]

//slice() - returns a shallow copy of a portion of the array
let sliced = numbers.slice(1, 4);
console.log(sliced); // [2, 3, 4]

//splice() - adds or removes elements from the array
numbers.splice(2, 1, 6, 7);
console.log(numbers); // [1, 2, 6, 7, 5]

//forEach() - executes a provided function once for each array element
numbers.forEach((num) => {
  console.log(num);
});

//map() - creates a new array with the results of calling a function on every element
//It creates a new array by applying a function to every element in the original array.

//Important: map() does not change the original array.
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 12, 14, 10]

//add 10 to each element in the array
let AddTen = numbers.map((num) => num + 10);
console.log(AddTen); // [11, 12, 16, 17, 15]

//filter() - creates a new array with all elements that pass the test implemented by the provided function
let filtered = numbers.filter((num) => num > 5);
console.log(filtered); // [6, 7]

//reduce() - executes a reducer function on each element of the array, resulting in a single output value
let sum2 = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum2); // 35

//loops in JavaScript
//Loops are used to execute a block of code repeatedly as long as a specified condition is true.
//  JavaScript provides several types of loops, including `for`, `while`, and `do...while` loops.
//while loop
//The `while` loop executes a block of code as long as a specified condition is true.
//  It checks the condition before each iteration, and if the condition is false, the loop terminates.
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

let j = 1;

while (j <= 6) {
  console.log(j);
  j++;
}

//Do...while loop
//The `do...while` loop is similar to the `while` loop, but it guarantees that the block of code will be executed at least once,
// even if the condition is false.
do {
  console.log(j);
  j++;
} while (j <= 6);

//for loop
//The `for` loop is a control flow statement that allows you to execute a block of code a specific number of times.
//  It consists of three parts: initialization, condition, and increment/decrement.
for (let k = 0; k < numbers.length; k++) {
  console.log(numbers[k]);
}

//More Example of for loop
for (let k = 1; k <= 5; k++) {
  console.log(k);
}

//continue and Break
//The `continue` statement is used to skip the current iteration of a loop and move on to the next iteration.
//Break in Loops
//When break is encountered in a loop, the loop terminates immediately.

//The program control is transfered to the statements following the loop.

//No more loop iterations are executed.
for (i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}

//continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}

console.log(document);

//DOM Manipulation
//DOM manipulation refers to the process of using JavaScript to interact with and modify the Document Object Model (DOM) of a web page.
//  The DOM is a representation of the HTML structure of a web page, and it allows developers to access and manipulate elements, attributes, and content dynamically.

//Selecting Elements
//Selecting elements from the DOM is the first step in manipulating them.
//  JavaScript provides several methods to select elements based on their tag name, class, ID, or other attributes.
//getElementById()
const element = document.getElementById("myElement");
console.log(element);
element.textContent = "Hello, World!";

const button = document.getElementById("btn");
button.addEventListener("click", function () {
  alert("Button clicked!");
});

//B. getElementsByClassName()

//Selects elements by class.
const paragraphs = document.getElementsByClassName("text");

console.log(paragraphs);

//C. getElementsByTagName()

//Select elements by tag name
const divs = document.getElementsByTagName("div");
console.log(divs);

//D. querySelector()

//The most commonly used selector.

//It returns the first matching element.
const firstDiv = document.querySelector("div");

//E. querySelectorAll()

//Returns all matching elements.
const allDivs = document.querySelectorAll("div");
console.log(allDivs);

//Changing Content
//Once you have selected an element, you can change its content using properties like `textContent`, `innerHTML`, or `innerText`.
const heading = document.getElementById("heading");
heading.textContent = "New Heading";
heading.innerHTML = "<span>New Heading</span>";

//CHANGING STYLES
//You can change the styles of an element using the `style` property.
heading.style.color = "blue";
heading.style.fontSize = "24px";
//element.classList.add("new-class"); // Add a class
//example of classList
const element = document.getElementById("myElement");

//element.classList.remove("old-class"); // Remove a class
//remove a class from the element's class list
element.classList.remove("old-class");

//element.classList.toggle("active"); // Toggle a class

//element.setAttribute("attributeName", "value"); // Set an attribute
element.setAttribute("data-custom", "value");

//element.getAttribute("attributeName"); // Get an attribute
const attributeValue = element.getAttribute("data-custom");
console.log(attributeValue); // Output: value

//Dom Events
//DOM events are actions or occurrences that happen in the browser, such as user interactions (clicks, key presses, mouse movements)
//  or changes in the state of the document.
//  JavaScript allows you to listen for these events and execute specific code in response to them.

//EXAMPLE OF DOM EVENTS
const button1 = document.getElementById("myButton");
button1.addEventListener("click", function () {
  alert("Button clicked!");
});

const inputField = document.getElementById("myInput");
inputField.addEventListener("input", function () {
  console.log("Input changed:", inputField.value);
});
//types of events
//1. Mouse Events: These events are triggered by mouse actions, such as clicks, double-clicks, mouse movements, and hovering over elements.
//2. Keyboard Events: These events are triggered by keyboard actions, such as key presses and releases.
//3. Form Events: These events are triggered by form interactions, such as submitting a form or changing the value of an input field.
//4. Window Events: These events are triggered by changes in the browser window, such as resizing or scrolling.
//5. Touch Events: These events are triggered by touch interactions on touch-enabled devices, such as tapping or swiping.
//6. Focus Events: These events are triggered when an element gains or loses focus, such as when a user clicks on an input field or navigates away from it.
//7. Drag and Drop Events: These events are triggered by dragging and dropping elements within the browser window.
//8. Media Events: These events are triggered by media elements, such as playing, pausing, or ending a video or audio file.
//9. Custom Events: These events are user-defined events that can be created and triggered programmatically using JavaScript.
//10. Animation Events: These events are triggered by CSS animations, such as when an animation starts, ends, or repeats.
//11. Clipboard Events: These events are triggered by clipboard actions, such as copying, cutting, or pasting content.
//12. Pointer Events: These events are triggered by pointer interactions, which can include mouse, touch, and stylus input.
//13. Wheel Events: These events are triggered by mouse wheel actions, such as scrolling up or down within an element.
//14. Load and Unload Events: These events are triggered when a page or resource is loaded or unloaded, such as when a user navigates to a new page or closes the browser window.

//input events
//Input events are triggered when the value of an input element changes, such as when a user types in a text field or selects an option from a dropdown menu.
//  The `input` event is commonly used to listen for changes in input elements and respond accordingly.
const input = document.querySelector("#name");

input.addEventListener("input", (event) => {
  console.log(event.target.value);
});

//change events
//Change events are triggered when the value of an input element changes and the element loses focus, such as when a user selects a different option from a dropdown menu or checks/unchecks a checkbox.
//  The `change` event is commonly used to listen for changes in input elements and respond accordingly.
const select = document.querySelector("#mySelect");
select.addEventListener("change", (event) => {
  console.log(event.target.value);
});

let countrySelect = document.getElementById("country");
countrySelect.addEventListener("change", function () {
  let selectedCountry = countrySelect.value;
  console.log("Selected country:", selectedCountry);
});

//submit events
//Submit events are triggered when a form is submitted, either by clicking a submit button or pressing the Enter key while focused on an input field within the form.
//  The `submit` event is commonly used to listen for form submissions and perform actions such as validation or sending data to a server.
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted!");
});
//preventDefault() stops the browser's default action.
//stop the form from submitting and refreshing the page.

//Keyboard Events
//Keyboard events are triggered by user interactions with the keyboard, such as pressing or releasing keys.
//  The most common keyboard events are `keydown`, `keyup`, and `keypress` (deprecated).
//  These events allow developers to respond to specific key actions and implement custom behavior based on user input.
const inputField1 = document.getElementById("myInput");
inputField1.addEventListener("keydown", function (event) {
  console.log("Key down:", event.key);
});
inputField1.addEventListener("keyup", function (event) {
  console.log("Key up:", event.key);
});

//form validation
//Form validation is the process of checking user input in a form to ensure that it meets certain criteria before the form is submitted.
//  It helps prevent invalid or incomplete data from being sent to the server and improves the overall user experience.
//  Form validation can be performed using HTML attributes, JavaScript, or a combination of both.
//example of form validation
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;

  if (name === "") {
    console.log("Name is required");
  } else {
    console.log("Form is valid");
  }
});
