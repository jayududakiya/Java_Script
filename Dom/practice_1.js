const h1 = document.getElementsByClassName("heading");

let count = 0;

function styleH1 (Num,color="red"){
    h1[Num].textContent = `heading ${Num+1}`;
    h1[Num].style.color = color;
}


setTimeout(
    // line code 
    ()=> {styleH1(count,"blue")
    count++;
    setTimeout(
        ()=> {styleH1(count,"pink")
        count++;
        setTimeout(
            ()=> {styleH1(count,"yellow")
            count++;
            setTimeout(
                ()=> {
                    count = 5
                    styleH1(count,"red")
                    count++;
                    setTimeout(
                        ()=> {
                            styleH1(count,"#444")
                            count++;
                    },2000)
            },2000)
        },2000)
    },1000) 
    // custom add
    setTimeout(
    ()=>{
        count = 3;
        styleH1(count,"brown")
        setTimeout(
            ()=> {
            count++;
            styleH1(count,"violet")
            count = 2;
        },1000)
    },2000)
},
1000)

