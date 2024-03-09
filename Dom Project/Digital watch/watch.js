{
    
    function showTime (){
        let dates = new Date();
        
        let Hours = dates.getHours();
        let Minutes = dates.getMinutes();
        let Seconds = dates.getSeconds();
        let txt = "";

        
        Hours > 12 ? txt = "PM" : txt = "AM";
        
        Hours < 12 ? Hours =  Hours  : Hours = Hours - 12;
        Hours < 10 ? Hours = "0" + Hours : Hours = Hours;

        Minutes < 10 ? Minutes = "0" + Minutes : Minutes = Minutes;
        
        Seconds < 10 ? Seconds = "0" + Seconds : Seconds = Seconds;


        const H = document.getElementById("Hours");
        const M = document.getElementById("Minutes");
        const S = document.getElementById("Seconds");
        const timeTxt = document.getElementById("Timetxt");

        H.innerHTML = Hours;
        M.innerHTML = Minutes;
        S.innerHTML = Seconds;
        timeTxt.innerHTML = txt;



    }
    
    setInterval(showTime,1000);

}