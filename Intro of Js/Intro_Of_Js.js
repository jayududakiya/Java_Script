// introduction of js

/*******New Html Element Add In Though Javascript *********/

{
    var newelement = document.createElement("h1");
    newelement.textContent="hello world";
    document.body.appendChild(newelement);
    
    var newelement=document.createElement("marquee",Option);
    newelement.textContent="hello world";
    document.body.appendChild(newelement);
    
    var newelement=document.createElement("pre");
    newelement.textContent="how are you! ";
    document.body.appendChild(newelement);

    var pre_tag = document.createElement("pre");
    pre_tag.textContent=`how are you! 
    width  in javascript  😁
    space using `;
    document.body.appendChild(pre_tag);

}




// using var variable 

{

    var x = 20 ;
    console.log(x);
    x=21;
    console.log(x);
    var x=30;
    console.log(x);
}


{
    // console.log(x); this show error
    let x = 20 ;
     x = "jay" ;
     console.log(x);
     console.log(x);
}

{
    const x = "jay" ;
     console.log(x);
     const x1 = 20;
     console.log(x1);
}

{
    // const x , y; this not valid 
    const x = 20;
    const y = 50;
    console.log(x);
    console.log(y);
}


// -> The latest ECMAScript(ES6) standard defines following data types: Out of which six data types are Primitive(predefined). 

// -> Boolean. true and false.

// -> null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)

// -> undefined. A top-level property whose value is not defined.

// -> Number. An integer or floating point number. For example: 42 or 3.14159.

// -> BigInt. An integer with arbitrary precision. For example: 9007199254740992n.

// -> String. A sequence of characters that represent a text value. For example: "Howdy".

// -> Symbol. A data type whose instances are unique and immutable.



{

    let  x = "jackson";

    // console.log(x.trim(x));
    // console.log(x.);

}