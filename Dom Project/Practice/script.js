// const dots = document.querySelector(".dot");
const rows = document.querySelectorAll(".row")
console.log(rows);
const demos1 = document.querySelectorAll("#demo1")
const demos2 = document.querySelectorAll("#demo2")
console.log(demos1);
console.log(demos2);
let check ;

rows.forEach((row)=>{
    row.addEventListener("mouseover",(e)=>{
        // row.classList.add("active");
        const active = document.querySelector(".active");
        // console.log(active);
        const  dots = document.querySelector(".dot");   
        console.log(dots);
        dots.style.left = e.x+"px";
        dots.style.top = e.y+"px";
    });
    row.addEventListener("mouseleave",( )=> {
        row.classList.remove("active");
        // active.appendChild().document.querySelector(".dot").style.backgroundColor = "blue";
    });
})