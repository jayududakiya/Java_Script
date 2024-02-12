"use strict";
{
    console.log(`Print 1,4,9,16`);
    let total = 0;
    let i = 1;
    while(i<=5)
    {
        total=i*i;
        i++;
        console.log(total);
    }

}
/*
            total = i X i;
 F: i  = 0 =  0   = 0 X 0 ; // 0
 S: i  = 1 =  1   = 1 X 1 ; // 1
 T: i  = 2 =  4   = 2 X 2 ; // 4
 F: i  = 3 =  9   = 3 X 3 ; // 9
 FI: i = 4 =  16  = 4 X 4 ; // 16
 */