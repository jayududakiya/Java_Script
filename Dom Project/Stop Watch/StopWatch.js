const Hours = document.getElementById("Hour");
const Minutes = document.getElementById("Minute");
const Seconds = document.getElementById("Second");
const Milliseconds = document.getElementById("Millisecond");




// button

const BTN = document.querySelector("#start-btn i");
const clearAll = document.getElementById("clear")
const list = document.querySelector(".lap-box ol");




let Hr = 0 ;
let Min = 0 ;
let Sec = 0 ;
let Milsec = 0;

let laps ;

function WatchTime (){
    Milsec += 10;

    if(Milsec == 1000){
        Sec++;
        Milsec = 0;
        //
        if(Sec == 60){
            Min++;
            Sec = 0;
            //
            if(Min == 60){
                Hr++;
                Min = 0;
            }
        }
    } // end

    let H = Hr < 10 ? "0" + Hr : Hr;
    let Mn = Min < 10 ? "0" + Min : Min;
    let Se = Sec < 10 ? "0" + Sec : Sec;
    let MSe = Milsec < 10 ? "00" + Milsec : Milsec < 100 ? "0" + Milsec  : Milsec;

    laps = `${H} : ${Mn} : ${Sec} : ${MSe} `;

    Hours.innerHTML = H;
    Minutes.innerHTML = Mn;
    Seconds.innerHTML = Se;
    Milliseconds.innerHTML = MSe;
}



let clicks = null;
let ID = null ;
let count = 0 ;


function LapTime (){
    list.style.display = "block"
    count += 1;
    console.log(`This is ${count} lap : ${laps}`)

    let elm = document.createElement("li");
    elm.innerHTML = `#${count} : \t\t ${laps}`;
    list.appendChild(elm);

    if(list.innerHTML !== ""){
        clearAll.style.opacity = 1;
        clearAll.style.display = "flex";
    }
}

clearAll.addEventListener("click" ,function (){
    list.innerHTML = "";
    count = 0;
    if(list.innerHTML == ""){
        clearAll.style.opacity = 0;
        clearAll.style.display = "none";
    }
})

function ResetTime () {
    clearInterval(ID);

    Hr = 0 ;
    Min = 0 ;
    Sec = 0;
    Milsec = 0;

    BTN.className = "ri-play-large-line";

    Hours.innerHTML = "00";
    Minutes.innerHTML = "00";
    Seconds.innerHTML = "00";
    Milliseconds.innerHTML = "000";
    console.log('Call reset function ');
    clicks = null;
    console.log('Clicks = ', clicks);
}


function stopCount (){

    if(clicks == null || clicks == 0){
        BTN.className = "ri-pause-large-line";
        ID = setInterval(WatchTime,10)
        clicks = true;
        console.log('Clicks = ', clicks);
    }
    else if(clicks == true){
        BTN.className = "ri-play-large-line";
        clearInterval(ID);
        clicks = false ;
        console.log('Clicks = ', clicks);
    }else{
        clicks = 0;
        console.log('Clicks = ', clicks);
    }
}
