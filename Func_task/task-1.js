"use strict"
{
    function revers (num) {
        let remind ;
        let Print =  0;
        while(num > 0 )
        {
            remind = num % 10;
            Print = Print * 10 + remind;
            num = parseInt(num / 10);
        }
        return console.log(Print);
    }

    revers(54);
}