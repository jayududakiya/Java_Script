// ARRAY

{

    // Check is Array or note Array.isArray();

    let color = ["blue" , "Green" , "Red" , "Yellow"]; // true
    let colors = {
        1 : "Red" ,
        2 : "Blue" ,
        3 : "Yellow" ,
        4 : "Green" ,
    }; // false

    console.log(typeof(color));
    console.log(Array.isArray(color));

    console.log(typeof(colors));
    console.log(Array.isArray(colors));

}

{
    console.log(`\nThis is Push() Method`);
    
    let Items = ['items-1','items-2','items-3','items-4', 3 , 5 , 10 ];
    console.log(Items);

    // Add element

    Items.push("Items-5");
    console.log(Items);
    
    Items.push("Items-6");
    console.log(Items);
}

{
    console.log(`\nThis is Pop() Method`);
    
    let Items = ['items-1','items-2','items-3','items-4', 3 , 5 , 10 ];
    console.log(Items);
    
    // Remove element
    let popvalue = Items.pop(); // 10
    popvalue  = Items.pop(); // 5
    popvalue = Items.pop(); // 3 
    console.log(Items);
}


{
    console.log(`\nThis is unshift() Method`);
    
    let Items = ['items-1','items-2','items-3','items-4', 3 , 5 , 10 ];
    console.log(Items);

    // Add element

    Items.unshift("Items-5");
    console.log(Items);
    
    Items.unshift("Items-6");
    console.log(Items);
}

{
    console.log(`\nThis is shift() Method`);
    
    let Items = ['items-1','items-2','items-3','items-4', 3 , 5 , 10 ];
    console.log(Items);
    
    // Remove element
    let shiftvalue = Items.shift(); // items-1
    shiftvalue = Items.shift(); // items-2
    shiftvalue = Items.shift(); // items-3
    console.log(Items);
}


{
    console.log(`\nThis is Concat() Method`);

    let Items = ['Hello','World'];
    let Items1 = ['my','Name'];

    console.log("First Array :",Items);
    console.log("Second Array :",Items1);

    console.log(Items.concat(Items1,"jayan","student"));


}

{
    console.log(`\nThis is Slice() Method`);

    let Items = ['items-1','items-2','items-3','items-4', 3 , 5 , 10 ];
    console.log(Items);

    let SliceArr = Items.slice(3,6);

    console.log(SliceArr);
    
}

{
    console.log(`\nThis is Splice() Method`);

    let Items = ['items-1','items-2','items-3','items-4', 3 , 5 , 10 ];
    console.log(Items);

    let SpliceArry = Items.splice(4,6,"item-5","item-6");

    console.log(SpliceArry); // remove element 
    console.log(Items);
    
}


{
    console.log(`\nThis is reverse() Method`);

    let Items = ['items-1','items-2','items-3','items-4', 3 , 5 , 10 ];
    console.log(Items);

    console.log(Items.reverse());
    
}

{
    console.log(`\nThis is sort() Method`);

    let Items = [10,30,50,15,55,44,100,4 ];
    console.log(Items);

    
    console.log(`\n Normal Sort() `);
    console.log(Items.sort());

    console.log(`\n perfect Sort() `);
    console.log(Items.sort((a,b)=> a-b));
    console.log(Items.sort((a,b)=> a-b).reverse());

    console.log(`\n Normal Sort() of string array value  `);
    
    let flutes = ['apple','orange','banana','mango'];
    console.log(flutes);    
    
    console.log(flutes.sort());
}

{
    console.log(`\nThis is min() && max() Method`);

    let Items = [10,30,50,15,55,44,100,4,-1 ];
    console.log(Items);


    function myMax(array) {
        return Math.max.apply(null,array);
    }

    function myMin(array) {
        return Math.min.apply(null,array);
    }

    console.log(`\n find Max value using max method `);
    console.log(">",myMax(Items));

    console.log(`\n find Min value using min method `);
    console.log(">",myMin(Items));
}