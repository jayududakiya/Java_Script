{
    // async & await  function 

     function f(){
        let text = "this run async function now ";
        return text;
    }

    let Prom1 = new Promise(function ( resoled, reject ){
        setTimeout(function() {resoled ("this is resoled 1")},3000);
        // setTimeout(function() {reject ("this is Rejected")},5000)
    }) 

    let Prom2 = new Promise(function ( resoled, reject ){
        setTimeout(function() {resoled ("this is resoled 2")},4000);
        // setTimeout(function() {reject ("this is Rejected")},5000)
    })

    let Prom3 = new Promise(function ( resoled, reject ){
        setTimeout(function() {resoled ("this is resoled 3")},5000);
        // setTimeout(function() {reject ("this is Rejected")},5000)
    }) 

    async function asyncFunction(){
        let x = await Prom1;
        console.log(x);
        let x1 = await Prom2;
        console.log(x1);
        (function f1(){
            let h1 = document.createElement("h1");
            h1.innerHTML = "This is h1 tag"
            document.body.appendChild(h1)
            })();
        let x2 = await Prom3;
        console.log(x2);
        console.log("this is after '1' async function code line");
        console.log("this is after '2' async function code line");
        (function f2(){
            let h1 = document.createElement("h1");
            h1.innerHTML = "This is h1 tag"
            document.body.appendChild(h1)
            console.log("this is after '4' async function code line");
        })();
    }
    (function f3(){
        console.log("this is after '5' async function code line");
    })();
    
    asyncFunction();
    
        
        
        

}