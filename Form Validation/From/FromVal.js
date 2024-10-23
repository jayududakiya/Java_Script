// const Form = document.getElementById("Form");
const USER = document.querySelector("#username")
const PASSWORD = document.querySelector("#password")

const USERerror =document.querySelector("#userError")
const PASSWORDerror =document.querySelector("#passwordError")

// Form.addEventListener("submit" , ()=>{
//     return ValiData();
// })



function ValeData (){
    if(USER.value === ""){
        USERerror.textContent = "user name is empty"
    }
    // else if(USER.value === ){
    //     USERerror.textContent = `enter valid user name 'xyz@gmail.com'`
    // }
    else{
        console.log("USER" , USER.value);
        return true;
    }
    return false;
}