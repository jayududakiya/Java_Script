// javascript Number method 

// toString();

console.log(`this is toString() Method  : `);

let Num1 = 155 ;
console.log(Num1);
console.log(typeof(Num1));

let Num2 = Num1.toString();
console.log(Num2);
console.log(typeof(Num2));


// toExponential()
console.log(""); // empty line 

console.log(`this is toExponential() Method  : `);

let Num4 = 1500000 ;
console.log(Num4);
console.log(typeof(Num4));

let Num5 = Num4.toExponential();
console.log(Num5);
console.log(typeof(Num5));

console.log(""); // empty line 
console.log(`this is toExponential(4) '4' show number after point value   : `);

Num4 = 15550000;
 
console.log(Num4);
Num5 = Num4.toExponential(4);
console.log(Num5);
console.log(typeof(Num5));


// toFixed();

console.log(""); // empty line 
console.log(`this is toFixed() Method  : `);

let Num6 = 15.556764 ;
console.log(Num6);
console.log(typeof(Num6));

let Num7 = Num6.toFixed();
console.log(Num7);
console.log(typeof(Num7));

console.log(""); // empty line 
console.log(`this is toFixed(2) '2' show number after point value   : `);
Num7 = Num6.toFixed(2);
console.log(Num7);
console.log(typeof(Num7));


console.log(""); // empty line 
console.log(`this is toFixed(3) '3' show number after point value   : `);
Num7 = Num6.toFixed(3);
console.log(Num7);
console.log(typeof(Num7));

// toPrecision();

console.log(""); // empty line 
console.log(`this is toPrecision() Method  : `);

let Num8 = 1.556764 ;
console.log(Num8);
console.log(typeof(Num8));

console.log(""); // empty line
let Num9 = Num8.toPrecision();
console.log(Num9);
console.log(typeof(Num9));

console.log(""); // empty line
console.log(` toPrecision(3) Total '3' value OF base number `);
Num9 = Num8.toPrecision(3);
console.log(Num9);
console.log(typeof(Num9));

console.log(""); // empty line
console.log(` toPrecision(2) Total '2' value OF base number `);
Num9 = Num8.toPrecision(2);
console.log(Num9);
console.log(typeof(Num9));

console.log(""); // empty line
console.log(` toPrecision(1) Total '1' value OF base number `);
Num9 = Num8.toPrecision(1);
console.log(Num9);
console.log(typeof(Num9));



// valueof();

console.log(""); // empty line
console.log(`this is valueof() Method  : `);

let Num10 = 1.556764 ;
console.log(Num10);
console.log(typeof(Num10));

console.log(""); // empty line
console.log(`after .valueof method `);
let Num11 = Num10.valueOf();;
console.log(Num11);
console.log(typeof(Num11));

console.log(""); // empty line
console.log(`value in string  `);
Num10 =" 1.556764" ;
console.log(Num10);
console.log(typeof(Num10));

console.log(""); // empty line
console.log(`after .valueof method `);
Num11 = Num10.valueOf();;
console.log(Num11);
console.log(typeof(Num11));