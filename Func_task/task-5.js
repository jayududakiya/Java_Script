{
    let divisible_5 = (num) => 
    {
        if(num % 5 === 0)
        {
            console.log(num , "Number is devisable with 5");
        }else{
            console.log(num , "Number is NOT devisable with 5");
        }
    }
    divisible_5(prompt(`Enter Number is devisable with 5 or Not :`,));
}