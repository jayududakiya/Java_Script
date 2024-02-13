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



// here return must be rquide if using variable s  

let sub = (function Sub (a,b) {
    return (a-b);
})(10,4);

console.log(sub);