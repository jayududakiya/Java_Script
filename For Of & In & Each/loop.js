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
    
    // for (const iterator of product) {
    //     console.log(iterator);   
    // }
    
    // console.log(`\nfor in loop`);
    // for (const iterator in product) {
    //     console.log(product[iterator]);   
    // }
}

{
    const profile = {
        Name : "hello",
        UserN : "@hello23",
        isFollow : true,
        Posts : 234
    }

    // in object for of loop not work it's got error
    
    // console.log(`\nfor in loop`);
    // for (const iterator in profile) {
    //     console.log( iterator , " : ",profile[iterator]);   
    // }
}

{
    // const Items = new Map([
    //     ["Tv",2000],
    //     ["Laptops",3400],
    //     ["Computer",5500],
    //     ["Tablets",550],
    // ]);
    
    const Items = new Map();
    
    Items.set('Tv',2000);
    Items.set('laptops',200);
    Items.set('Mobile',100);

}