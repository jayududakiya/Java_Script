{
    let NewText;
    const e = document.getElementById("text");
    
    function Getval () {
        let text = e.value;
        if(e.value == ""){
            NewText = "";
        }else{
            NewText = text.trim().split(" ");
        }
        console.log(NewText);
        const elm = document.querySelector("#text-length span")
        elm.style.color = "#ff5f5f"
        elm.innerHTML = NewText.length;

        const h1 = document.getElementById("text-length")
        h1.style.transition = 0.3+"s"
        h1.style.color = "#1d1f21";
    }
 
}