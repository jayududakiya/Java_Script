{
    // cello copy and deep copy 
    // rest parameters


    console.log(`Cello & Deep copy using Rest parameters`.toUpperCase());

    console.log(`=> In Array`);

    let MyProducts = ['Tv','Watch','Mobile','Laptop'];

    // with out rest parameters  cello copy

    // let NewProducts = MyProducts;

    // with rest parameters deep copy
    
     NewProducts = [...MyProducts];
    
    // change in array 
    NewProducts.push('Tablets');
    NewProducts.push('SmartTv');
    
    console.log(`=> this MyProducts`, MyProducts);
    console.log(`=> this NewProducts`, NewProducts);
}


{
    console.log(`\nCello & Deep copy using Rest parameters`.toUpperCase());
    
    console.log(`=> In Object`);
    
    let userAccount = {
        Name : 'harry potter',
        Email : 'harrypotter@gmail.com',
        Age : 35,
        InstaId : 'harry_21#'
    }
    
    // with out rest parameters  cello copy
    let updateAccount = userAccount;
    userAccount.gender = 'Male';
    
    // with rest parameters deep copy in object must use {} 
    updateAccount = {...userAccount};


    // change in object
    updateAccount.whtasappNum = 3132332323;

    console.log(userAccount);
    console.log(updateAccount);

}