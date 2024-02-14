"use strict"
{
    let  income = parseInt(prompt("Enter Your Income " , ));
    let N_income,TEXT,count;

    console.log("Your INCOME Is",income);
    if(income <= 2500){
        TEXT = income*0;
		N_income = income;
        console.log("Your income Tex on 0% is " , TEXT);
        console.log("Your Total income Amount is" , N_income);
    }
    else if(income > 2500 && income < 5000){
        count = parseInt(250+(income-2500));
        TEXT = (count*0.10).toFixed(2);
		N_income =parseInt( income + parseInt(TEXT));
        console.log("Your income Tex on 10% is " , Number(TEXT) );
        console.log("Your Total income Amount is" , N_income);
    }

    else if(income > 5000 && income <= 10000){
    
        count = parseInt(250+1000+(income-5000));
        TEXT = (count*0.20).toFixed(2);
		N_income =parseInt( income + parseInt(TEXT));
        console.log("Your income Tex on 20% is " , Number(TEXT) );
        console.log("Your Total income Amount is" , N_income);
    }

    else if(income > 10000 ){
        count = parseInt(250+1000+(income-10000));
        TEXT = (count*0.30).toFixed(2);
		N_income =parseInt( income + parseInt(TEXT));
        console.log("Your income Tex on 30% is " , Number(TEXT) );
        console.log("Your Total income Amount is" , N_income);
    }
}