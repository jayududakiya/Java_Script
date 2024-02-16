{
    function find_Num(Num) {
        if(Num >= 0)
        {
            console.log(Num,"This Number is Positive.");
        }
        else
        {
            console.log(Num ,"This Number is Negative.");
        }
    };

    find_Num(prompt(`Enter Your Number :`,));
}