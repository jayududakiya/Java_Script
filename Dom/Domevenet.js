

// onclick event
{

    const e1 = document.getElementsByTagName("h1");
    console.log(e1);
    function showmessages1 ()
    {
        // e1[0].style.color = "red"
        alert('YES i am heading tag');
        // confirm('YES i am heading tag');
    }

    const e = document.getElementsByClassName("Demo-div");
    console.log(e);
    let n = 1;
    function Messages2 ()
    {
        // let check = n ;
        if(n == 0){
            e[0].className = "click-div";
            n++
        }else{
            e[0].className = "Demo-div";
            n--;
            console.log(n);
        }
        // e.style.backgroundColor = "blue"
    }

}