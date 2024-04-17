const bgTheme = document.querySelector("#bg-Theme")

const BtnBox = document.querySelector(".color-btns")

BtnBox:addEventListener("click",(e)=>{
    const target =  e.target
    bgTheme.style.transition = "all 1.3s linear"
    if(target.textContent === "Sky Blue"){
        bgTheme.style.background = "#0ACDFF"
    }
    if(target.textContent === "Linen"){
        bgTheme.style.background = "#ffeddf"
    }
    if(target.textContent === "Rose taupe"){
        bgTheme.style.background = "#A26769"
    }
    // ButtonText(target)
})

// let x = true;

// function ButtonText (target){
//     if(x){
//         target.style.color = "red";
//         x = !x;
//         console.log(x);
//     }
//     else{
//         target.style.color = "blue";
//         x = !x;
//         console.log(x);
//     }
// }


