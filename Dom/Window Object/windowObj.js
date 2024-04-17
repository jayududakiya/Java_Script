const YBtn = document.getElementById("youtubeBtn");
const GBtn = document.getElementById("googleBtn");
const C = document.getElementById("close");
let WinID;

let url1 = "https://www.google.com";
let url2 = "https://www.youtube.com";
let name1 = "Google";
let name2 = "Youtube";

let features = "top=0,left=500,hight=500,width=500";

YBtn.addEventListener("click", function () {
  WinID = window.open(url2, "Google", features);
});

GBtn.addEventListener("click", function () {
  window.open(url1, "Google", features);
});

const showText = document.getElementById("show-text");


showText.innerText += ` 1. ${location.host} 
                        
2. ${location.origin}

3. ${location.pathname}

4. ${location.href} 

5. ${location.protocol} `;


const showText1 = document.getElementById("show-text-1");
const showText2 = document.getElementById("show-text-2");
const showText3= document.getElementById("show-text-3");
const showText4= document.getElementById("show-text-4");
                        

let time = 0;
let ID = null;

function MyFunction (){ 
        ID = setInterval(()=>{
            time +=1;
            if(time > 10){
                showText1.textContent = "Go to Link";
                clearInterval(ID)
                // window.location = "https://vegamovies.cab/"
                location.href = "https://vegamovies.cab/"

            }else{
                showText1.textContent = time;
            }
        },1000)
}


showText1.addEventListener("click",function (){
    MyFunction();
})


function MyFunction2 (){ 
        ID = setInterval(()=>{
            time +=1;
            if(time > 5){
                showText2.textContent = "Go to Yahoo ";
                clearInterval(ID)
                location.assign("https://www.yahoo.com")

            }else{
                showText2.textContent = time;
            }
        },1000)
}


showText2.addEventListener("click",function (){
    MyFunction2();
})

function MyFunction3 (){ 
        ID = setInterval(()=>{
            time +=1;
            if(time > 5){
                showText3.textContent = "Go to Youtube";
                clearInterval(ID)
                location.replace("https://www.youtube.com")

            }else{
                showText3.textContent = time;
            }
        },1000)
}


showText3.addEventListener("click",function (){
    MyFunction3();
})


function MyFunction4 (){ 
        ID = setInterval(()=>{
            time +=1;
            if(time > 9){
                showText4.textContent = "Page Is Reload ";
                clearInterval(ID)
                location.reload();
            }else{
                showText4.textContent = `Page Reload In ${time}`;
            }
        },1000)
}


showText4.addEventListener("click",function (){
    MyFunction4();
})


const COPY = document.getElementById("copy-box")
const PAST = document.getElementById("past-box")
const COPYBTN = document.getElementById("copy-btn")
const PASTBTN = document.getElementById("past-btn")

COPY.addEventListener("copy",function(){
    alert("You NOT Copy Successfully This Way Use Button Only ")
    navigator.clipboard.writeText("");
})


COPYBTN.addEventListener("click",async function (){
    await navigator.clipboard.writeText(COPY.value);
})

        
PASTBTN.addEventListener("click",
     async function(){
        const PASTTEXT =   await navigator.clipboard.readText()
        PAST.value = PASTTEXT;
        // PAST.value = COPY.value;
    }
)


navigator.bluetooth.getAvailability().then((available) => {
    if (available) {
      console.log("This device supports Bluetooth!");
    } else {
      console.log("Doh! Bluetooth is not supported");
    }
  });
  
if(!navigator.cookieEnabled){
    console.log("this site Not allow allow");
    alert("pleas allow Cooks for better esperance ")
}else{
    console.log("this site has Cook allow");
}