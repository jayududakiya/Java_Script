"use strict"
{
    let salary = parseInt(prompt("Enter Your Salary :",));
    let HRA = 0, DA = 0, Gross = 0;
    
    console.log(`Your Salary is ` , salary);
    if(salary <= 5000 ){

        HRA=parseInt(salary*0.08);
        DA=parseInt(salary*0.20);

        Gross = parseInt(salary + HRA + DA);

        console.log("Your 8% of HRA is " , HRA);
        console.log("Your 20% of DA is " , DA);
        console.log("Your Total Gross Salary is ",Gross);
    }
    else if(salary > 6000 && salary <= 10000){

        HRA=parseInt(salary*0.12);
        DA=parseInt(salary*0.30);

        Gross = parseInt(salary + HRA + DA);

        console.log("Your 12% HRA is " , HRA);
        console.log("Your 30% DA is " , DA);
        console.log("Your Total Gross Salary is ",Gross);
    }
    else if(salary > 11000 && salary <= 15000){

        HRA=parseInt(salary*0.15);
        DA=parseInt(salary*0.40);

        Gross = parseInt(salary + HRA + DA);

        console.log("Your 15% HRA is " , HRA);
        console.log("Your 40% DA is " , DA);
        console.log("Your Total Gross Salary is ",Gross);
    }

    else if(salary => 16000 ){

        HRA=parseInt(salary*0.20);
        DA=parseInt(salary*0.50);

        Gross = parseInt(salary + HRA + DA);

        console.log("Your 20% HRA is " , HRA);
        console.log("Your 50% DA is " , DA);
        console.log("Your Total Gross Salary is ",Gross);
    }
}