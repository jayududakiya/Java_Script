/*
5. Write a JavaScript function that checks whether a number is perfect.
*/

{
    function MyperfectNum (Num)
    {
        let perfect = 0 ;
        for (let i = 1; i < Num ; i++) {
            if ( Num % i == 0) {
                perfect += i ;
                // console.log(perfect);
            }    
        }
        if (perfect === Num) {
            return console.log("this is Number is Perfect", Num);
        } 
        else {
            return console.log("this is Number is NOT Perfect", Num);
        }
    }

    MyperfectNum(18);
    
}