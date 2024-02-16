{
    let divisible_3o5 = (num) => 
    {
        if(num % 5 === 0 && num % 3 === 0)
        {
            console.log(num ,"Number is devisable with 5 And 3");
        }else{
            console.log(num ,"Number is NOT devisable with 5 And 3");
        }
    }

    divisible_3o5(prompt(`Enter Number is Divisible With 5 Or 3 :`,));
}
    