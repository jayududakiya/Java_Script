const p = document.getElementById("demo");


const Tea = ["Tea Powder","Sugar","Milk","Water"];

function OrderTea (){
    return new Promise ((resolve,reject)=>
    {
        setTimeout(()=>{
            if(Tea.includes("Tea Powder")){
                let txt = "Your Tea is ready Soon";
                resolve(txt);
                // resolve(); // this is not working when create a variable in promise 
            }else{
                txt = "Your Tea is not Ready pleas wait.. "
                reject(txt);
                // reject(); // this is not working when create a variable in promise 
            }
        },3000)
    })
};

let text = "";

OrderTea()
    .then((success)=>{
        // console.log(success);
        text += `${success} \n `;
        console.log(text);
        return success;
    })
    .then((success)=>{
        text += "Thank You For Order ";
        p.innerText = text;
    })
    .catch((error)=>{
        error += "Thank You";
        text += error + " ";
        console.log(error);
    })
    // .finally(()=>{
        //     text += "Sir  ";
        //     console.log("Sir")
        // p.innerText = text;
    // })

