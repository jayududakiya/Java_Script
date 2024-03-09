{
    let NewText;
    
    function Getval () {
        const e = document.getElementById("text");
        let text = e.value;
        NewText = text.trim().split(" ");
        const elm = document.querySelector("#text-length span")
        elm.innerHTML = NewText.length;
    }
    
}