{
    /*
    The complete list of leap years in the first half of the 21st century is therefore 2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, and 2048.
    */ 
    (function Check_year (Year) {
        if(Year % 4 === 0){
            console.log(Year , 'is Leap Year ');
        }else{
            console.log(Year , 'is NOT Leap Year ');
        }
    })(parseInt(prompt("Enter Year To Check :",)));
}