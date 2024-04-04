const MoveBox = document.getElementById("box-move");
const leftBtn = document.getElementById("left-Move");
const rightBtn = document.getElementById("right-Move");
const DownBtn = document.getElementById("Down-Move");
const UpBtn = document.getElementById("Up-Move");
const box = document.querySelectorAll(".box");

let marginX = "0rem 0.3rem";
box.forEach((boxs) => {
    boxs.style.margin = marginX;
});


let [MoveX , MoveY] = [ box[0].offsetWidth , box[0].offsetHeight];

let [countX , countY] = [0,0];

console.log(MoveX,MoveY);

MoveBox.style.transition = `all 0.4s linear`;   

rightBtn.addEventListener("click",()=>{ 
    if(countX<MoveX*2){
        countX += MoveX;
        MoveBox.style.left = `${countX}px`;
        console.log(countX);
    }else{
        countX = 0;
        MoveBox.style.left = `${countX}px`;
        console.log(countX);
    }
})

