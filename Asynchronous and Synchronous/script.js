// "use strict"
{
    // setTimeout(function, milliseconds);

    // function helloWord () {
    //     console.log("Hello World");
    // }
    // setTimeout(helloWord,2000);  // this is show after 2 secondes 
    // console.log("Hello World First Print");
    // console.log("Hello World Second Print");
}

{

    // function printWorld (){
    //     console.log("hello this is javascript ");
    // }

    // function printWorld2 (){
    //     console.log("hello this is java ");
    // }

    // let StoID1 = setTimeout(printWorld, 3000);
    
    // console.log("this is second line");
    // console.log("this is thread line");
    // console.log("this is forth line");

    // let StoID2 = setTimeout(printWorld2, 5000);

    // console.log( "ID of First SetTimeOut ",StoID1); 

    // console.log( "ID of Second SetTimeOut ",StoID2);

}


{
    // function printWorld (){
    //     console.log("hello this is javascript ");
    // }

    // function printWorld2 (){
    //     console.log("hello this is java ");
    // }

    // let StoID1 = setTimeout(printWorld, 3000);
    
    // console.log("this is second line");
    // console.log("this is thread line");
    // console.log("this is forth line");

    // let StoID2 = setTimeout(printWorld2, 5000);

    // console.log( "ID of First SetTimeOut ",StoID1); 
    
    // console.log( "ID of Second SetTimeOut ",StoID2);

}

// setInterval();
{

    // let count = 0 ;        
    // function PrintWord () {
    //     count += 1;
    //     if(count > 6){
    //         clearTimeout(StopID)
    //     }else{

    //         console.log(`This is item ${count}`);
    //         let element = document.createElement(`h${count}`);
    //         element.style.textAlign = "center";
    //         element.innerHTML = `<br> this is h${count} tag`;
    //         document.body.appendChild(element);   
    //     }
    // }
    
    // let StopID = setInterval(PrintWord , 2000 )
}


// Use clearTimeout() Method
{
    // // program to stop the setTimeout() method

    // let count = 0;
    // let x = 0;
    
    // // // function creation
    // function increaseCount(){
        
    //     // increasing the count by 1
    //     // decreeing the count by 1
        
    //     count += 1;
        
    //     const e = document.getElementById("Countdown");
        
    //     console.log(count)
    //     e.innerHTML =  count;

        
    //     if(count == 5){
    //     //   clearTimeout(id);
    //       // Create element:
    //       const c_Element = document.createElement("a");
    //       c_Element.href = "https://www.instagram.com/";
    //       c_Element.title = "this is instagram link"
    //       c_Element.innerHTML ='setTimeout is  instagram Auto';
    //       // Append to body:
    //       document.body.appendChild(c_Element);

    //     }
    //     if(count == 10){
    //       clearTimeout(id);
    //       // Create element:
    //       const c_Element = document.createElement("a");
    //       c_Element.href = "https://www.facebook.com/";
    //       c_Element.title = "this is facebook link"
    //       c_Element.innerHTML ='<br> setTimeout is facebook Auto';
    //       // Append to body:
    //       document.body.appendChild(c_Element);

    //     }
    // }
    // let id =  setInterval(increaseCount , 360)
}



{
    // JavaScript Promise and Promise Chaining

    // In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

    // A promise may have one of three states.

    // Pending
    // Fulfilled
    // Rejected
    // A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.

    // For example, when you request data from the server by using a promise, it will be in a pending state. When the data arrives successfully, it will be in a fulfilled state. If an error occurs, then it will be in a rejected state.

    // Create a Promise

    // To create a promise object, we use the Promise() constructor.
        
    // catch() and then() Method 
        // let count = 0;

        // function secondeFunc () {
        //     console.log("this seconde Done after first work is with function ");
        // }

        // let create_P1 = new  Promise(function (resolved , reject) {
        //     if (count) {
        //         resolved ("Work is done now");
        //     }else{
        //         reject (" Work is done NOT now ");
        //     }
        // })
        
        // // this is print only object type value in console
        // console.log(create_P1); 
    
        // // call promise in txt form
        // create_P1
        // .then(function (resolved) {
        //     // this is for true or done work show in console 
        //     console.log(resolved);;
        // })
        // .then(() =>{
        //     // console.log("this seconde Done after first work is ");
        //     secondeFunc();
        // })
        
        // // this is for true or done work show in console 
        // .catch((reject) => console.log(reject,"throw ERROR")) // this is for error or NOT done work show in console 
        
    
}


// {
//     let countValue = new Promise(function (resolve, reject) {
//         // resolve("Promise resolved");
//         reject("Promise Rejected");
//     });
    
//     // // // // executes when promise is resolved successfully
    
//     countValue
//         .then((result) =>{
//         console.log(result);
//         })
//         .then(()=> {
//         console.log("You can call multiple functions this way.");
//         })
//          .catch((err)=>{
//             console.log(err);
//         });
// }


{
    // finally() Method
    let create_P2 = new Promise(function(resolve , reject ){
        resolve ("Your Data Is Success Full Recived from Data Bas");
        reject ("Your Data Is Not Recived from Data Bas");
    });
    create_P2.then(function (resolve) {console.log(resolve);}).then(function () {console.log("Your Account is Created ");}).catch(function (reject) {console.log(reject);}).finally(function(){console.log("Your Try is Compleat pleas waite ");})
}