// {
//     // GetElemnetById;


//     function change (){
    //         let clicks = document.getElementById("text");
    //         // this is for button
    //         // let clicks = document.getElementById("btn");
    //         if(clicks.className == 'text-I'){
        //             clicks.className = 'text-II'
        //             // clicks.innerHTML = 'This is first click '
        
        //         }else{
            //             clicks.className = 'text-I'
            //             // clicks.innerHTML = 'This is seconde click '
            //         }
            //     }
            // }
            
            
{
    // GetElemnetById;
    
    function Btn_click () {
        const elem = document.getElementById("text");
        const elem2 = document.getElementById("text-2");
        
        elem.style.backgroundColor = 'red';
        elem.style.color = 'blue';
        elem.style.fontSize = '20px';
        elem.style.transition = 0.5 + 's';
        elem2.style.textAlign = "center";
        elem2.style.transition = 5 +'s' ;
        elem2.style.backgroundColor = 'blue';
        // elem2.style.display = 'none';
    }
}



{
    // GetElemnetById;

    const getClass = document.getElementsByClassName("box-II");
    const getClass1 = document.getElementsByClassName("text");

    // console.log(getClass1);

    function Btn_click1 () {
        for(let index = 0; index < getClass1.length ; index++){
            getClass1[index].style.transition = 3 + 's';
            if (index%2 == 0) {
                getClass1[index].style.color = 'red';
                getClass1[index].style.backgroundColor = "yellow";
            }
            else{
                getClass1[index].style.color = 'white';
                getClass1[index].style.backgroundColor = "black";
                getClass1[index].style.textAlign = "center";
            }
        }
        for (const iterator of getClass) {
            iterator.style.backgroundColor = "blue";
        }
    }

}


{
    // querySelectorAll  ,  querySelector this is select only one 

    // const element = document.querySelectorAll("#box-1 p");
    // const element1 = document.querySelector("#box-1 h1");
    // const element2 = document.querySelectorAll("#box-1 h2");
    // const element3 = document.querySelectorAll("#box-1 h3");
    // console.log(element);
    // function  Query_click () {
    //     for (const iterator of element) {
    //         iterator.style.color = "blue";
    //     }
    //     // for (const iterator of element1) {
    //     //     iterator.style.color = "yellow";
    //     // }
    //         element1.style.color = "yellow";
    //     for (const iterator of element2) {
    //         iterator.style.color = "green";
    //     }
    //     for (const iterator of element3) {
    //         iterator.style.color = "pink";
    //     }
    // }
}



{
    // getElementByTagName 

    
    // const element = document.getElementsByTagName("li");
    // const element1 = document.getElementsByTagName("p");
    // const element2 = document.getElementsByTagName("span");
    // const element3 = document.getElementsByTagName("b");

    // console.log(element2);

    // function  tag_click () {
    //     for (const iterator of element) {
    //         iterator.style.color = "white";
    //         iterator.style.backgroundColor = "black";
    //     }
    //     for (const iterator of element1) {
    //         iterator.style.fontFamily = "'Courier New', Courier, monospace";
    //     }
    //     for (const iterator of element2) {
    //         iterator.style.color = "blue";
    //     }
    //     for (const iterator of element3) {
    //         iterator.style.color = "gray";
    //     }
    // }
}


// {
//     const element = document.querySelector("p");
    
//     function Check () {
//         if(element.hasAttribute("name")){
//             alert(`yes Name attribute is exist `);
//         }
//         else{
//             alert('no name attribute is exist !');
//         }
//     }
// }