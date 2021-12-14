// variable a is used before declaring it
a = 5;
console.log(a);
var a; // Output 5

// using message before declaring
console.log(message);   // undefined
var message;

// using message before declaring
var message;
console.log(message); // undefined

// variable a is declared as 5 
var a;
a = 5;
console.log(a); // Output 5

// variable is printed without initializing it.
console.log(a);
var a = 5; //output undefined

// variable is used inside the function
var a = 4;

function greeting() {
    b = 'hello';
    console.log(b); // hello
    var b;
}

greeting(); // hello
console.log(b); // Uncaught ReferenceError: b is not defined because b is only accessible inside the function.

//function Hoisting 
let x = 20,
    y = 10;

let result = add(x,y);
console.log(result); //TypeError: add is not a function
function add(a, b){
return a + b;  
} 

// variable is used with the let keyword
a = 5;
console.log(a);
let a; // error Cannot access 'a' before initialization


