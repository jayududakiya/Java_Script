"use strict"
// {
//     let string = "";
//     for(let i = 0 ; i <= 5 ; i++) 
//     {
//         for(let j = 0 ; j <= 5 ; j++) 
//         {
//             string = string + i ;
//             // console.log( string + "\n" );
//         }
//         console.log( string + "\n" );
//     }
//     console.log(string );
// }

{

function Random () {
    let Ran ;
    Ran = Number.parseInt(Math.random()*3);
    return Ran;
}

let x = Random();

let Get = prompt(`Chose any of Number below : \n 1 . To Stone \n 2 . To Paper \n 3 . Scissor`,);
console.log(Get);
}