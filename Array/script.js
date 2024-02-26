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



{
    console.log(`\nThis is  forEach() Method`);

    let Items = ["Hello","world","this","is","javascript",6];
    console.log(Items);
    
    let txtItem = "";
    
    Items.forEach(function (value, index){
        txtItem += ((value + " ").toUpperCase());
    });

    console.log("simple Text Format : ",txtItem );
}

{
    console.log(`\nThis is  every() Method`);

    let Ntext = [10,65,16,17,88,91,11,44,180];

    console.log(Ntext);

    
    let result = Ntext.every((val , index) => {
        // return ( val > 5 && val < 200);  // this condition was true in this array 
        return ( val > 25 );  // this condition was false in this array 
        // return console.log(val) , val < 25; 
    });

    console.log(result);

}

{
    console.log(`\nThis is  some() Method`);

    let Ntext = [100,55,6,70,88,90,444,234];

    console.log(Ntext);

    
    let result = Ntext.some((val , index) => {
        // return val < 50; // this condition was true in this array 
        return (val > 10 && val < 50); // this condition was false in this array 
        // return console.log(val) , 50 < val; 
    });

    console.log(result);

}

{
    console.log(`\nThis is  find() Method`);
    let Ntext = [3,6,8,232,45,64,87,11,322,453];

    console.log(Ntext);    

    let result = Ntext.find((val,index) => {
        return console.log(">" ,val), (val > 30); // this find only one equal value
    });

    console.log(result);
}

{
    console.log(`\nThis is  filter() Method`);

    let Ntext = [30,44,18,23,45,'a','e','i','o','u'];

    let Vowel = ['a','e','o','u','i'];

    console.log(Ntext);

    //Simple use 

    let result = Ntext.filter((val,index) => {
        return (val > 24 || val === "i"); //this find all sem condition equal value
    });

    // // with use of function 

    // function Myfilter (val , index) {
    //     return (val < 50);
    // }
    // let result = Ntext.filter(Myfilter); 

    console.log(result);

}

{
    console.log(`\nThis is  findIndex() Method`);

    let Ntext = [30,44,7,18,'hello', 44,56,'javascript'];
    
    console.log(Ntext);

    let result = Ntext.findIndex((val,index) => {
        return (val === "hello" || val ===  "javascript"); //this find all sem condition equal value
        // return (val == 7  && val === "hello" && val ===  "javascript"); //this find all sem condition equal value // -1
    });

    console.log(result);
}

{
    console.log(`\nThis is  entries() Method`);

    let Ntext = [30,18,'hello', 44,56,'javascript'];
    
    Ntext.pop();
    Ntext.shift();

    console.log(Ntext);

    let result = Ntext.entries();
    console.log(result.next().value);
    console.log(result.next().value);
    console.log(result.next().value);

}

{
    console.log(`\nThis is  map() Method`);

    let Ntext = [30,18,'hello', 44,56,'javascript',84,"language"];
    

    console.log(Ntext);

    let Newfilter1 = Ntext.filter((val)=>
    {
        return typeof("a") == typeof(val) ;
    }) 

    console.log("1.>",Newfilter1);

    let result = Ntext.map((val,index)=> {
        return +(val +"1");
    });

    console.log(result);

    let Newfilter = result.filter((val)=>
    {
        return val >= 0;
    }) 

    console.log("2.>",Newfilter);
}



{
    console.log(`\nThis is  reduce() Method`);

    let Ntext = [30,18, 44,56,84,-5,23,10];

    // reduce method start apply Left To Right side 
    
    console.log(Ntext);

    let sum = Ntext.reduce((total , index)=>{
        return total + index;
    },0);

    console.log(sum);
}

{
    console.log(`\nThis is  reduceRight() Method`);

    let Ntext = [30,18, 44,56,84,-5,23,0];

    // reduce method start apply Right To Left side 
    
    console.log(Ntext);

    let sum = Ntext.reduceRight((total , index)=>{
        return total - index;
    },0);

    console.log(sum);
}

{
    console.log(`\nThis is includes() Method`);

    let Ntext = [30,18, 44,56,84,-5,23,0];

    // reduce method start apply Right To Left side 
    
    console.log(Ntext);

    console.log(Ntext.includes(-5))
}

{
    console.log(`\nThis is copyWithin() Method`);

    let Ntext = [10,20,30,40,50,55,66,99];

    console.log("main Array >",Ntext);

    // let Result = Ntext.copyWithin(4,1,3); 
    let Result = Ntext.copyWithin(5,1,3); 

    console.log("New Copy Array >",Result);

}