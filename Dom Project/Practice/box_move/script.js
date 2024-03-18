const MoveBox = document.getElementById("box-move");
const leftBtn = document.getElementById("left-Move");
const rightBtn = document.getElementById("right-Move");

let left = 195;
let count = 0;


rightBtn.addEventListener("click",()=>{
    MoveBox.style.backgroundColor = "blue";
    count += left;
    MoveBox.style.left = `${count}px`;
    MoveBox.style.transition = `all 0.4s linear`;
    if(count>390){
        MoveBox.style.left = `${0}px`;
        console.log(count);
        count = 0;
    }else{
        MoveBox.style.left = `${count}px`;
        console.log(count);
    }
})

leftBtn.addEventListener("click",()=>{
    MoveBox.style.backgroundColor = "#ff4545";
    count -= left;
    MoveBox.style.left = `${count}px`;
    if(count<0){
        MoveBox.style.left = `${390}px`;
        count = 390;
        console.log(count);
    }else{
        MoveBox.style.left = `${count}px`;
        console.log(count);
    }
})



