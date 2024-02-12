"use strict"
{
    console.log(`fibonacci series`);
    let a = 0;
    let b = 1;
    let c = 1;
    console.log(a);
    for(let i = 0;i <= 10 ; i++)
    {
        console.log(c);
        c = a + b;
        a = b ;
        b = c ;
    }
}