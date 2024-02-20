console.log(`String and its Methods`);

// String declension 

let text1 = "Hello 'world'"; // string single Quotas 

let text2 = 'Hello  "world"'; // string doblas Quotas

let text3 = ` 'Hello' " world "  `; // string backticks

console.log(text1);
console.log(text2);
console.log(text3);


{
    // length method 

console.log(`This is length method `);

let Stxt = "hello Javascript ";

console.log( Stxt  , "=>" ,  Stxt.length);
}

{
    // split method 

console.log(`This is split method `);

let Stxt1 = "hello Javascript this is";

console.log( Stxt1  , "=>" ,  Stxt1.split('')); // this method give return string in array from 

console.log( Stxt1  , "=>" ,  Stxt1.split(' ')); // this time it's  split from space  to array

console.log( Stxt1  , "=>" ,  Stxt1.split('a')); // this time it's split without 'a' alphabet  remove 

console.log( Stxt1  , "=>" ,  Stxt1.split('s')); // this time it's split without 's' alphabet  remove

}

{
    // toUppercase method

console.log(`This is  toUppercase  method `);

let Stxt1 = "hello Javascript This is";

console.log(Stxt1 , "=>" ,  Stxt1.toUpperCase()); 

}

{
    // toLowerCase method

console.log(`This is  toLowerCase  method `);

let Stxt1 = "hello Javascript This is";

console.log(Stxt1 , "=>" ,  Stxt1.toLowerCase()); 

}

{
    // trim method

console.log(`This is trim  method `);

let Stxt1 = "         hello Javascript This is                           "; 

console.log(Stxt1);
console.log("New trim both side string =" ,  Stxt1.trim().length , Stxt1.trim());  // this method removes unwanted space from start side and End sides
console.log("New trim Start side  string =" ,  Stxt1.trimStart().length ,Stxt1.trimStart());  // this method removes unwanted space from ONLY start side 
console.log("New trim End Side string =" ,  Stxt1.trimEnd().length , Stxt1.trimEnd());  // this method removes unwanted space from ONLY end side 

}

{
    //toLocaleLowerCase method

console.log(`This is  toLocaleLowerCase  method `);

let Stxt1 = 10000000;

console.log(Stxt1 ,  Stxt1.toLocaleString());  // this convert number in to local text from it's work only  number 

}

{
    // padStart / padEnd method

console.log(`This is  padStart / padEnd  method `);

let Num = "1234";

let padNum = Num.padStart(10,"X"); 

console.log(padNum); // ' XXXXX ' than paint its Num

let padNum1 = Num.padEnd(10,"X"); 

console.log(padNum1); // Num than paint its ' XXXXX '

let Newpad = padNum + padNum1 ;

console.log(Newpad); 

Newpad = padNum1 + padNum ;

console.log(Newpad); 

Newpad = padNum1 + " " + padNum ;

document.write(Newpad); 


}
