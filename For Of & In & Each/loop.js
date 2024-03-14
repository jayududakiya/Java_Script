{
    const Myarr = [
        {
            file : 'Javascript',
            Fname : 'Js'
        },
        {
            file : 'python',
            Fname : 'py'
        },
        {
            file : 'java',
            Fname : 'java'
        }
    ];


    // Myarr.forEach( (val , index , arr ) => {
    //     console.log(` file name is : ${val.Fname} , file is : ${val.file} `);
    // });
}

{

    let product = ['Mobile','laptops','Tv','Desktop'];

    // console.log(`\nfor of loop`);
    
    for (const iterator of product) {
        console.log(iterator);   
    }
    
    console.log(`\nfor in loop`);
    for (const iterator in product) {
        console.log(product[iterator]);   
    }
}

{
    const profile = {
        Name : "hello",
        UserN : "@hello23",
        isFollow : true,
        Posts : 234
    }

    // in object for of loop not work it's got error
    
    console.log(`\nfor in loop`);
    for (const iterator in profile) {
        console.log( iterator , " : ",profile[iterator]);   
    }
}

{

    console.log(`\nfor of loop in new Map()`);
    console.log(" ");
    
    const Products = new Map([
        ["Tv",2000],
        ["Laptops",3400],
        ["Computer",5500],
        ["Tablets",550],
    ]);
    
    
    for (const Product of Products) {
        console.log(Product);
    }

    console.log(`\n Expecting Key From Map()`);
    console.log(" ");

    for (const Product of Products.keys()) {
        console.log(`${Product} `);
    }

    console.log(`\n 1.Expecting Keys & VALUE From Map()`);
    console.log(" ");

    for (const Product of Products.keys()) {
        console.log(`${Product}  : ${Products.get(Product)}`);
    }

    console.log(`\n 2.Expecting Keys & VALUE From Map()`);
    console.log(" ");

    for (const [key,value] of Products) {
        console.log(`${key}\t:\t${value}`);
    }
    

}


{

    console.log(`\n>>Extracting Set In Console \n With For OF loop`);

    let UsersID = new Set();
    UsersID.add(1)
    UsersID.add(2)
    UsersID.add(4)
    UsersID.add(6)
    UsersID.add("Herray")
    
    for (const val of UsersID) {
        console.log(val);
    }
}