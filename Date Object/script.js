// "Date Object"
// let date = new Date();
// console.log(date);

//  dates = new Date("december  21 , 2024 9:30:50 "); // to input time and date with string 

// console.log(dates);

//  dates = new Date(2024 , 4 , 5 , 8 , 30 , 21); // input all deferent numbers without string 

// console.log(dates);

//  dates = new Date(200000); // (Milliseconds)

// console.log(d);

// Sat Mar 03 1973 15:16:40 GMT+0530 (India Standard Time)



let dates = new Date().getFullYear();

console.log("its give current full year ",dates);

dates = new Date().getDate();

console.log("its give current date ",dates);

dates = new Date().getMonth();

console.log("its a give current mount  ",dates);

dates = new Date().getDay();

console.log("its give week days number",dates);

dates = new Date().getHours();

console.log("Hours in 24 ",dates);

dates = new Date().getMinutes();

console.log("its a Minutes ",dates);


dates = new Date().getSeconds();

console.log("its a give Secondes   ",dates);

dates = new Date().getMilliseconds();

console.log("its a Milliseconds ",dates);

dates = new Date().getTime();

console.log("its a ",dates);

// Date() And it's Set Methods  

{
    console.log(`\n>Date() in setFullYear()`);

    /*
     setFullyear( yearValue , monthValue , dateValue ); 
     this all input value are option
    */
    const xTime  = new Date();

    xTime.setFullYear(2001);

    console.log(xTime.toDateString());

    xTime.setFullYear(2001,10);
    
    console.log(xTime.toDateString());

    xTime.setFullYear(2001,10,21);

    console.log(xTime.toDateString());


}

{

    console.log(`\n>Date() in setDate()`);

    /*
     setDate( ); 
     this all input value are option
    */
    
     const xTime  = new Date(2024,1); 
     // Here month is February it's Day is == 29 in put is 31 
     
     // if current in put is less than Month total date thi is show its date or its grater than than current month date it's add in next Month date 

    xTime.setDate(0); // 2 day add in Next March Month 

    console.log(xTime.toDateString()); // here value is updated and now Month value is march 
     
     xTime.setDate(35); // 4 day add in Next April Month 

    console.log(xTime.toDateString());

}


{

    console.log(`\n>Date() in setHours()`);

    /*
    setHours(hoursValue, minutesValue, secondsValue, msValue)
    */

    const xTime = new Date();

    xTime.setHours(3,45,20,5000);

    console.log(xTime.toTimeString());

}

{

    console.log(`\n>Date() in \nsetMilliseconds() \nsetMinutes() \nsetSeconds() `);


    const xTime = new Date();

    xTime.setHours(9);
    xTime.setMinutes(30);
    xTime.setSeconds(30); 

    xTime.setMilliseconds(1000); // if msSecond is <= 999 is === 0 seconde  //  1000 == 1 seconde  and 60,000 == 1 minutes

    console.log(xTime.toTimeString());

}

{

    console.log(`\n>Date() in setMonth()`);


    const xTime = new Date();


    /*
        setMonth(monthValue)
        
        this method is take only between 
        0 == january 
        &&
        11 == december         

        setMonth(monthValue, dateValue)
        if date value is > Month day Than it's Add on Next Month or year
    */ 

    xTime.setMonth(10,34);

    console.log(xTime.toDateString()); // December 04 2024

    xTime.setMonth(10,100); // Change Year and Month To

    console.log(xTime.toDateString()); // December 08 2025

}

{

    console.log(`\n>Date() in setTime()`);

    const xTime = new Date(" March 21 , 2025 , 9:30:31 ");

    console.log(xTime);

}

// Date() And it's SetUTC  Methods  

/*
Full form of UTC is Coordinated Universal Time or Universal Time Coordinated (UTC). It is a coordinated time scale maintained by the Bureau International des Poids et Mesures (BIPM) and also referred to as ZULU time.
*/

{
    console.log(`\n>Date() in setUTCDate()`);

    const nTime = new Date('January 1 , 1969 , 8:30:34');

    /*
        Parameters
        > dateValue
        > An integer from 1 to 31 representing the day of the month.
    */

   nTime.getUTCDate();

   console.log(nTime);

    nTime.setUTCDate(1);
    console.log(nTime);
 
}

{
    console.log(`\n>Date() in setUTCFullyear()`);

    const nTime = new Date( 'December 31, 1974 2:00:00 GMT-3:00');

    nTime.getUTCFullYear();

    console.log(nTime);

    nTime.setUTCFullYear(1976);

    console.log(nTime);
}