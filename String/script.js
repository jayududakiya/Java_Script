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

{
    console.log(`this is Slice() Method`);

    let text = "Hello This Javascript Language And This is Programming Language";

    console.log(text);

    let Up_text = text.slice(0,5); // this is start with 0 index To 5 index letter print 

    
    console.log(">", Up_text);
    
    Up_text = text.slice(10);  // this is start with 10 index To Lsat index letter print 
    
    console.log(">", Up_text);
                                    // print in revers 
    Up_text = text.slice(-10,-4);  // this is start with last index of string and Go to given number index letter print 

    Up_text = text.slice(-4);  // this is start with -4 and end with -1 value 
    
    console.log(">", Up_text);

}

{
    console.log(`this is charAt() Method`);

    let text = "Hello This Javascript Language And This is Programming Language";

    console.log(text);

    
    let New_text = text.charAt(0); // this only print letter on give index number 
    
    console.log(New_text);

}

{
    console.log(`this is charcodeAt() Method`);

    let text = "Hello This Javascript Language And This is Programming Language";

    console.log(text); // J == 11 index  // J == 74 ascii value 

    let New_text = text.charCodeAt(3); // this only print ascii value of give index number 

    console.log(New_text);

}

{
    let i = 65;
    let x = "";
    console.log("Alphabets form (A-Z) are:");
    document.write(`<br> <br> <h1> Alphabets form (A-Z) are : </h1>`);
 
    while (i <= 90) {
        x = x +" "+ String.fromCharCode(i);
        i++;
    }

    console.log(x);
    document.write(` <br> <pre> ${x} </pre>`);
}


{
    console.log(`this is subString() Method`);

    let text = "Hello This Javascript Language And This is Programming Language";

    console.log(text);

    let New_text = text.substring(1,16); 

    console.log(">",New_text);

    New_text = text.substring(-1,6);

    console.log(">",New_text);

    New_text = text.substring(-1);

    console.log(">",New_text);

    New_text = text.substring(-1,-6);

    console.log(">",New_text);

}

{
    console.log(`this is substr() Method`);

    let text = "Hello This Javascript Language And This is Programming Language";

    console.log(text);

    let New_text = text.substr(0,16);  // this method counts words

    console.log("16 words >",New_text);

    New_text = text.substr(18);

    console.log("18 words>",New_text);

    New_text = text.substr(-8); // this take only one number in negative value 

    console.log("last 8 words>",New_text);

    New_text = text.substr(-1,-6); // this is don't print any sting 

    console.log(" 0 words >",New_text);

}


{

    console.log(`this is replace() Method`);

    // this method is replace only first same word 

    let text = "Hello This Javascript Language And This is Programming Language";

    console.log(text);

    let New_word = text.replace("Hello" , " Hii ");

    console.log(">" , New_word);

}

{

    console.log(`this is replaceAll() Method`);

    // this method is replace all same word 

    let text = "Hello This Javascript Language And This is Programming Language";

    console.log(text);

    let New_word = text.replaceAll("This" , "'Hii'");

    console.log(">" , New_word);

}


{

    console.log(`this is replace() with '/g' key word Method`);

    // this method is replace only first same word 

    let text = "Hello This Javascript language And This is Programming language";

    // console.log(text);

    let New_word = text.replace(/l/g , "'L'");

    console.log("> " , New_word);
    document.write("<br> > " , New_word , "<br> <br>");

}