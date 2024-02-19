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

{
    console.log("=> Function are Objects");
    console.log("arguments.length");

    function counts_param (a,b,c,f,g) {
        return arguments.length;
    }

    console.log(counts_param(1,2,4,5,6));


    function counts_param1 (c,f,g) {
        return arguments.length;
    }

    console.log(counts_param1(1,2));

}

{
    console.log("=> Function are Objects");
    console.log("arguments pass parameters");

    function counts_param () {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum = sum +  arguments[i];
        }
        return sum ;
    }

    console.log("counts_param(1+2+3+4)");
    console.log("this Function give a Total of this numbers ",counts_param(1,2,3,4));

}

{
    console.log("=> Function are Objects");
    console.log("arguments pass parameters");

    function sum_param (...array) {
        let sum = 1;
        for (let i = 0; i <array.length; i++) {
            sum = sum *  array[i];
        }
        return sum ;
    }

    console.log("counts_param(1*2*3*4)");
    console.log("this Function give a Total of this numbers ",sum_param(1,2,3,4));

}


{
    console.log("=> Function in generator ");

    // declaration of getreport function 

    function* Generator () {
        yield "Hello";
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        return 5;
    }

    // how to call Generator function
    
    let  x  = Generator();

    console.log(x.next().value);
    console.log(x.next().value);
    console.log(x.next().value);
    console.log(x.next().value);
    console.log(x.next().value);
    console.log(x.next().value);
    console.log("this time its return 'undefined' because in this function we return only 6 time return value ");
    console.log(x.next().value); 

}

{
    console.log("=> Function in objects using ' .This ' Keyword : ");

    let Product = {
        Name : "pen",
        Caption : "parker",
        prices : 50 ,
        off : 2 ,
        show_val : function ()
        {
           return ` This is Product is " ${this.Caption} ${this.Name} " Price is " ${this.prices} "and Off in this Product is " ${this.off} " % `;
        }
    }

    let data = Product.show_val();
    console.log(data);
    console.log(Product.Name);
} 