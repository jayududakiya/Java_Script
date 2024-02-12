"use strict";
{
    console.log(`Print Total OF Odd 1 To 5 `);
   let total = 0;
   let i = 1;
   do{
    if(i%2==1){
        total = total + i ;
        console.log(i)
    }
    i++;
   }while(i<=5);
   console.log(`Total of 1 To 5 Odd is `);
   console.log(total);
}