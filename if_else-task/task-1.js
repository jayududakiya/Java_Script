"use strict"
{
    let unit =Number.parseInt(prompt(`Enter Your Electricity Bill Unit `,100)) ;
    let bill = 0 ;
    let Extcharge ;
    let minCharge = 50 ;

    if (unit<=100)
    {   
       bill = 50+unit*0.60;
  
       console.log(`Your Electricity Bill Unit Is :`,unit);
       console.log(`You Additional Charge : ${minCharge} Rs. `);
       console.log(`You Total Bill Amount Is :`,bill);
    }
  
  else if(100<unit && unit<=300)
    {
     bill=minCharge+60+(unit-100)*0.80;
     
     console.log(`Your Electricity Bill Unit Is :`,unit);
     console.log(`You Additional Charge : ${minCharge} Rs. `);
     console.log(`You Total Bill Amount Is :`,bill);
    }
  
    else 
     {
     bill = minCharge+60+160+(unit-300)*0.90;

     console.log(`Your Electricity Bill Unit Is :`,unit);
     console.log(`You Additional Charge : ${minCharge} Rs. `);
     }
  
  if(bill>300){
    Extcharge = (bill*0.15);
    console.log("Your 15% is : ",Extcharge);
    console.log(`You Total Bill Amount Is :`,bill+Extcharge); 
  }
}