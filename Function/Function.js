// Basic syntax of Function
/*
function name(params) {
    
}
*/
// Declaration OF Function

function Sum (a,b){ 
    console.log(`Sum of Tow Number :`);
    console.log(a*b);
}

Sum(10,3); // Call Function


// Function Call before declaration is Valid

addition(10,3);

function addition (a,b){ 
    console.log(`Addition of Tow Number :`);
    console.log(a+b);
}



// Function with return argument 

function addition2 (a,b,c){ 
    return a+b+c;
}
console.log(`Addition of Three Number :`);
let Total = addition2(10,3,5);
console.log(Total);



// Anonymous function

console.log(`Anonymous function`);

let division = function (a,b)
{
    return a/b;
}

console.log(`division of Two Number :`);
console.log(division(10,10));


// IIFE 

console.log(`Immediately Invoked Function Expression (IIFE) Function `);

(function sub (a,b) {
    console.log(a-b);
})(10,5);



// here return must be require if using variable s  

let sub = (function Sub (a,b) {
    return (a-b);
})(10,4);

console.log(sub);





console.log(`simple function`);
function subs (a,x){
    return a - x ;
}
console.log(subs(10,3)); // 7

console.log(`this is Arrow Function`);
// let Add = (a,b) =>{
//     return a + b;
// }

// sem output is "Arrow Function in short way "

let Add = (a,b) => a + b;

console.log(Add(10,20));

console.log(`Function in Constructor`);

let HelloWorld = new Function("a","b","return a/b");
console.log(HelloWorld(10,2));

// let HelloWorld = new Function("return function(return Hello World)");
// console.log(HelloWorld());