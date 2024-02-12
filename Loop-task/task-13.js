"use strict";
{
    console.log(`Print Total OF Even 1 To 5 `);
   let total = 0;
   for(let i = 1 ; i<=5 ; i++){
    if(i%2==0){
        total = total + i ;
        console.log(i)
    }
   }
   console.log(`Total of 1 To 5 Even is `);
   console.log(total);
}