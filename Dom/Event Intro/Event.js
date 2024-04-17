const btn = document.querySelectorAll(".btn");
const p = document.querySelectorAll(".text");

function AddT1 (){
    p[0].textContent = "You Click Button";
}

function AddT2 (){
    p[0].textContent = "You Double-click Button";
}

function AddT3 (){
    p[1].textContent = "Your Mouse Enter  Button";
    
}
function AddT4 (){
    p[1].textContent = "Your Mouse Leave Button";
}


const Btn3 = btn[2]
Btn3.addEventListener("mouseenter",AddT3)
Btn3.addEventListener("mouseleave",AddT4)

const Btn4 = btn[3]
Btn4.addEventListener("mouseleave",AddT4)


let count = 0 ;
function MouseM(){
    p.textContent = `You Add Mouse Move Event : ${count}`;
    count++;
}

document.querySelector("body").addEventListener("mousemove",MouseM)

// Remove EventListener
document.querySelector("body").removeEventListener("mousemove", MouseM)
Btn3.removeEventListener("mouseleave",AddT4)


// keydown event 
window.addEventListener("keydown",CheckKey)

function CheckKey (e){
    p[2].textContent += `${e.key} ,`
    p[3].textContent += `${e.keyCode} ,`
    if(e.key === "j"){
        // alert('You Press  "J" Key')
        p[2].textContent += ` a , y , a , n `
    }
}
    
// Scroll event 


window.addEventListener("scroll",function(){
    if(window.scrollY > 1000){
        
        document.querySelector(".border-danger")
        .style.background="blue";
        this.document.querySelector(".sticky-top")
        .style.background = "#ddd";
        this.document.querySelector(".sticky-top")
        .style.color = "#333";
        
    }else{
        document.querySelector(".border-success ")
        .style.background="green";
        document.querySelector(".border-danger")
        .style.background="yellow";

        this.document.querySelector(".sticky-top")
        .style.background = "#333";
        this.document.querySelector(".sticky-top")
        .style.color = "#ddd";
    }
})

// window.addEventListener("scrollend", () => {
//     console.log('scrollend Event active');
// });

window.addEventListener("wheel",function (Ev) {
    if(Ev.deltaY > 0){
        // console.log(Ev.deltaY);
        console.log('You Scroll Up mouse');
    }else if(Ev.deltaY < 0){
        // console.log(Ev.deltaY);
        console.log('You Scroll Down mouse');
    }
})

const input = document.querySelector("#inputFild")

// input.addEventListener('focus',function () {
//     input.style.background = "pink"
//     input.style.color = "white"
// })

// input.addEventListener('blur',function () {
//     input.style.background = "white"
//     input.style.color = "black"
// })

// input.addEventListener('change',function (e){
//     e.preventDefault();
//     const result = document.querySelector("#result")
//     result.textContent = e.target.value
// })

// input.addEventListener('input',function (e){
//     const result = document.querySelector("#result")
//     result.textContent = e.target.value
// })

const forms = document.getElementById("form-1")


forms.addEventListener('submit',function (e){
    e.preventDefault();
    const result = document.querySelector("#result")
    result.textContent = input.value

    console.log(e.timeStamp)
})


