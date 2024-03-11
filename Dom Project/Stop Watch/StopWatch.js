{
    const Hoers = document.getElementById("Hoers");
    const Minutes = document.getElementById("Minutes");
    const Seconds = document.getElementById("Seconds")
    const Milliseconds = document.getElementById("Milliseconds");
    const btn = document.getElementById("Btn")
    
    
    let Hor = 0;
    let Min = 0;
    let Sec = 0;
    let Msec = 0;
    
    function showTime (){
        // if(Hor !== 0 && Min !== 0 && Sec !== 0){
        //     Hor = 0+"0";
        // Msec = 0+"0";
        // Sec = 0+"0";
        // Min = 0+"0";
        // }
        // else{
            Msec += 1;
        
        if (Msec == 60) {
          
        Sec++;
        Msec = 0;
        Sec < 10 ? (Sec = "0" + Sec) : (Sec = Sec);

        if (Sec == 60) {
            
            Min++;
            Sec = 0;

            Min < 10 ? (Min = "0" + Min) : (Min = Min);

            if (Min == 60) {
              Hor++;
              Min = 0;
              Hor < 10 ? (Hor = "0" + Hor) : (Hor = Hor);
              if (Hor == 12) {
                Hor = 0;
                Min = 0;
                Sec = 0;
                Msec = 0;
              }
            }
          }

         
        }
        // }
        
    // Hor < 10 ? Hor = "0" + Hor : Hor = Hor;
            
            // Min < 10 ? Min = "0" : Min = Min;
        

        Hoers.innerHTML = Hor;
        Minutes.innerHTML = Min;
        Seconds.innerHTML = Sec;
        Milliseconds.innerHTML = Msec;

    }

    
    function ResetTime () {
        clearInterval(xID);
        
        Hor = 0;
        Msec = 0;
        Sec = 0;
        Min = 0;

        // btn.innerHTML = "Click";
        Hoers.innerHTML = Hor;
        Minutes.innerHTML = Min;
        Seconds.innerHTML = Sec;
        Milliseconds.innerHTML = Msec;
    }

    let check = null ;
    let xID ;
    
    
    
    function stopCount(){
        if(check == null){
            check = true;
            // btn.innerHTML = "Start";
            xID = setInterval(showTime,10);
            console.log(`call if part chan'`);
        }
        else if(check == true){
            check = false;
            clearTimeout(xID)
            // btn.innerHTML = "Stop";
            console.log(`call if part change 'false'`);
            
        }
        else{
            xID = setInterval(showTime , 10)
            check = true ;
            // btn.innerHTML = "Start";
            console.log(`call else part change 'true'`);
        }
    }

}