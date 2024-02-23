// "Date Object"
let date = new Date(); // default object create 
console.log(date);


{
    console.log(`\n>Date() in To method`);
    
    const nTime = new Date();
    
    console.log(nTime.toDateString());
    
    console.log(nTime.toLocaleDateString());
    
    console.log(nTime.toISOString());
    
    console.log(nTime.toLocaleString());

    console.log(nTime.toLocaleTimeString());

    console.log(nTime.toUTCString());

    console.log(nTime.toTimeString());

    console.log(nTime.getTimezoneOffset());
}


console.log("\nDate() And it's Get Methods ");
const gTime = new Date("Feb  23, 2024 ,17:38:43:345");
console.log(gTime);

{
    
    console.log(`\n> getDate()`);

    let getShow = gTime.getDate();

    console.log(getShow);

    console.log(`\n> getDay()`);

    /*
    An integer, between 0 and 6, representing the day of the week for the given date according to local time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on. Returns NaN if the date is invalid.
    */ 
    
    getShow = gTime.getDay();

    console.log(getShow);
        
        
    console.log(`\n> getFullYear()`);

    getShow = gTime.getFullYear();

    console.log(getShow);

    console.log(`\n> getHours()`);

    /*
    An integer, between 0 and 23, representing the hours for the given date according to local time. Returns NaN if the date is invalid.
    */ 

    getShow = gTime.getHours();

    console.log(getShow);


    console.log(`\n> getMilliseconds()`);

    getShow = gTime.getMilliseconds();

    console.log(getShow);


    console.log(`\n> getMinutes()`);

    getShow = gTime.getMinutes();

    console.log(getShow);

    console.log(`\n> getSeconds()`);

    getShow = gTime.getSeconds();

    console.log(getShow);

    console.log(`\n> getMonth()`);

    getShow = gTime.getMonth();

    /*
    An integer, between 0 and 11, representing the month for the given date according to local time: 0 for January, 1 for February, and so on. Returns NaN if the date is invalid.
    */ 

    console.log(getShow);
    
    
    console.log(`\n> getTime()`);
    
    getShow = gTime.getTime();
    
    /* This is getTime is Total of MilliSeconds from January 01 1970 to Current time   */ 

    console.log(getShow);

    console.log(`\n> getTimezoneOffset()`);

    //The getTimezoneOffset() method returns the difference (in minutes) between local time in UTC time. 
    
    getShow = gTime.getTimezoneOffset();
    
    console.log(getShow);
    
}

console.log("\nDate() And it's Set Methods ");  

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
    xTime.setMinutes(30,40);
    console.log(xTime);

    xTime.setSeconds(30,5000); 
    
    xTime.setMilliseconds(1000); // if msSecond is <= 999 is === 0 seconde  //  1000 == 1 seconde  and 60,000 == 1 minutes

    console.log(xTime);



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

    const xTime = new Date();


    // xTime.setTime("19:20:45");
    xTime.setTime("19");

    console.log(xTime);

}

// {

//     console.log(`\n>Date() in setDay()`);

//     const xTime = new Date();


//     // xTime.setTime("19:20:45");
//     xTime.setDay(2);

//     console.log(xTime);

// }

// Date() And it's SetUTC  Methods  

/*
Full form of UTC is Coordinated Universal Time or Universal Time Coordinated (UTC). It is a coordinated time scale maintained by the Bureau International des Poids et Mesures (BIPM) and also referred to as ZULU time.

UTC methods use UTC time (Coordinated Universal Time).

UTC time is the same as GMT (Greenwich Mean Time).

The difference between Local time and UTC time can be up to 24 hours.


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

