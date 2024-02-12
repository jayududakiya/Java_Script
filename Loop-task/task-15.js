"use strict";
{
    console.log(` Print 1 , 4 , 3 , 16 , 5 `);
    let i = 1;
    let root = 0;

    do{
        if(i%2==1)
        {
            console.log(i);
        }else{
            console.log(i*i);
        }
        i++;
    }while(i<=10);
}