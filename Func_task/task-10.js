{
    function Print1_Num (Num) {
        for(let i = Num ; i >= 1 ; i--){
            console.log(i);
        }
    };

    let Isnumber = Number.parseInt(prompt(`Enter Number To be Print :`,));
    Print1_Num(Isnumber);
}