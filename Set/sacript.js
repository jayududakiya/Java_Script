// set methods
/* 

What is Set() :  A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. A Set can hold any value of any data type.
*/ 

{
    // create new Set 
    
    const x  = new Set([1,2,3,4]);
    console.log(x);
    console.log(x.size);
}

{
    // add . Set 

    const Nset_1  = new Set([1,2,3]);

    let a = "x";
    let b = "y";
    let c = "hello";

    Nset_1.add(a);
    Nset_1.add(b);
    Nset_1.add(c);

    console.log(Nset_1);
    console.log(Nset_1.size);
}



{
    // delete . Set 

    const Nset_2  = new Set([1,2,3]);

    let a = "x";
    let b = "y";
    let c = "hello";

    Nset_2.add(a);
    Nset_2.add(b);
    Nset_2.add(c);

    Nset_2.delete(3);

    // delete using variables

    let z = "hello";
    Nset_2.delete(z);

    console.log(Nset_2);
    console.log(Nset_2.size);
}



{
    // hes . Set 

    const Nset_3  = new Set([10,26,30]);

    let a = "x";
    let b = "y";
    let c = "hello";

    Nset_3.add(a);
    Nset_3.add(b);
    Nset_3.add(c);

    // checking using variables

    let z = "hello";

    // has 

    // let check = Nset_3.has("X");
    let check = Nset_3.has("26");

    console.log(Nset_3);
    console.log(check);
    console.log(Nset_3.size);
}




{
    // values . Set 

    const Nset_4  = new Set([10,6,31]);

    let a = "x";
    let b = "y";
    let c = "hello";

    Nset_4.add(a);
    Nset_4.add(b);
    Nset_4.add(c);

    //using variables

    let z = "hello";

    // values 

    let L = Nset_4.values();

    console.log(Nset_4);
    console.log(L);
    console.log(Nset_4.size);
}


{
    const x = new Set(["a" , "b" , "c"]);
    
    let y = x.values();
  
    console.log(y);
  }