console.log("Form val");

// const countries = document.getElementById("countries");
// const language = document.getElementById("language");

const user_form = document.getElementById("user_form");

const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const phone = document.getElementById("phone");
const age = document.getElementById("age");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

let success_message = "<span class='font-medium'>Well done!</span>";
let error_message   = "<span class='font-medium'>Individual configuration</span>";
let empty_message  = "<span class='font-medium'>Enter valid Info</span>"

user_form.addEventListener("submit",(e)=>{
    e.preventDefault();
})

let regexName = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;

first_name.addEventListener('blur',()=>{
    let FnameValue = first_name.value;
    if(FnameValue === ""){
        first_name.classList.add("border-red-600")
        first_name.nextElementSibling.classList.add("text-red-800")
        first_name.nextElementSibling.innerHTML = `${empty_message}`;
    }
    else if(regexName.test(FnameValue)){
        first_name.classList.add("border-blue-600")
        first_name.nextElementSibling.classList.add("text-green-600")
        first_name.nextElementSibling.innerHTML = `${success_message}`;
    }else{
        first_name.classList.add("border-red-600")
        first_name.nextElementSibling.classList.add("text-red-600")
        first_name.nextElementSibling.innerHTML = `${error_message} First Name `;
    }
})

last_name.addEventListener('blur',()=>{
    let LnameValue = last_name.value;
    if(LnameValue === ""){
        last_name.classList.add("border-red-600")
        last_name.nextElementSibling.classList.add("text-red-800")
        last_name.nextElementSibling.innerHTML = `${empty_message}`;
    }
    else if(regexName.test(LnameValue)){
        last_name.classList.add("border-blue-600")
        last_name.nextElementSibling.classList.add("text-green-600")
        last_name.nextElementSibling.innerHTML = `${success_message}`;
    }else{
        last_name.classList.add("border-red-600")
        last_name.nextElementSibling.classList.add("text-red-600")
        last_name.nextElementSibling.innerHTML = `${error_message} Lsat Name `;
    }
})


phone.addEventListener('blur',()=>{
    let regexPhone = /^([0-9]){10}$/;
    let  phoneValue = phone.value;
    if(phoneValue === ""){
        phone.classList.add("border-red-600")
        phone.nextElementSibling.classList.add("text-red-800")
        phone.nextElementSibling.innerHTML = `${empty_message}`;
    }
    else if(regexPhone.test(phoneValue)){
        phone.classList.add("border-blue-600")
        phone.nextElementSibling.classList.add("text-green-600")
        phone.nextElementSibling.innerHTML = `${success_message}`;
    }else{
        phone.classList.add("border-red-600")
        phone.nextElementSibling.classList.add("text-red-600")
        phone.nextElementSibling.innerHTML = `${error_message} remove space OR try Agin `;
    }

})

age.addEventListener('blur',()=>{
    let regexAge = /^\S[0-9]{0,3}$/;
    let  ageValue = age.value;
    if(ageValue === ""){
        age.classList.add("border-red-600")
        age.nextElementSibling.classList.add("text-red-800")
        age.nextElementSibling.innerHTML = `${empty_message}`;
    }
    else if(regexAge.test(ageValue)){
        age.classList.add("border-blue-600")
        age.nextElementSibling.classList.add("text-green-600")
        age.nextElementSibling.innerHTML = `${success_message}`;
    }
    else{
        age.classList.add("border-red-600")
        age.nextElementSibling.classList.add("text-red-600")
        age.nextElementSibling.innerHTML = `${error_message} Not Valid Age`;
    }
})



email.addEventListener('blur',()=>{
    let regexEmail = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]{2,6})$/;
    let  emailValue = email.value;
    if(emailValue === ""){
        email.classList.add("border-red-600")
        email.nextElementSibling.classList.add("text-red-800")
        email.nextElementSibling.innerHTML = `${empty_message}`;
    }
    else if(regexEmail.test(emailValue)){
        email.classList.add("border-blue-600")
        email.nextElementSibling.classList.add("text-green-600")
        email.nextElementSibling.innerHTML = `${success_message}`;
    }else{
        email.classList.add("border-red-600")
        email.nextElementSibling.classList.add("text-red-600")
        email.nextElementSibling.innerHTML = `${error_message} Email Address `;
    }
})

// password.addEventListener('blur',()=>{

//     let PassValue = password.value;

//     const PasswordReq = document.getElementById("PasswordReq")    
//     const PasswordReqList =  document.querySelectorAll("#PasswordReq li")
    
//     if (PassValue === "") {
//       password.classList.add("border-red-600");
//       PasswordReqList.forEach((list)=>{
//         list.classList.remove("text-blue-700");
//         list.classList.add("text-gray-700");
//       })
//     }else if (/=.*\d+/.test(PassValue)) {
//         PasswordReqList[0].classList.add(`text-blue-700`);
//         console.log(PasswordReqList[0]);
//         console.log(PassValue);
//       } 
//     else if (/.*[a-zA-Z]+/.test(PassValue)) {
//       PasswordReqList[1].classList.add(`text-blue-700`);
//       console.log(PasswordReqList[1]);
//       console.log(PassValue);
//     }else if (/(.*[!#$%&?"]+)/.test(PassValue)) {
//       PasswordReqList[2].classList.add(`text-blue-700`);
//       console.log(PasswordReqList[2]);
//       console.log(PassValue);
//     }
//     else if (/.{8,}$/.test(PassValue)) {
//         PasswordReqList[0].classList.add(`text-blue-700`);
//         console.log(PasswordReqList[0]);
//         console.log(PassValue);
//     }
//     else {
//       password.classList.add("border-red-600");
//       PasswordReqList.forEach((list)=>{
//         list.classList.remove("text-blue-700");
//         list.classList.add("text-red-700");
//       })
//     }
    
// })


let PassValue = ""

password.addEventListener('blur', () => {
    PassValue = password.value;
    const PasswordReqList = document.querySelectorAll("#PasswordReq li");

    if (PassValue === "") {
        password.classList.add("border-red-600");
        PasswordReqList.forEach((list) => {
            list.classList.remove("text-blue-700");
            list.classList.add("text-gray-700");
        });
    console.log(">",PassValue);
    } else{
        password.classList.remove("border-red-600");
        password.classList.add("border-blue-600");
        console.log(">>",PassValue);
        if (/.*\d+/.test(PassValue)) {
            PasswordReqList[1].classList.add("text-blue-700");
        } else {
            PasswordReqList[1].classList.remove("text-blue-700");
        }

        if (/.*[a-zA-Z]+/.test(PassValue)) {
            PasswordReqList[2].classList.add("text-blue-700");
        } else {
            PasswordReqList[2].classList.remove("text-blue-700");
        }

        if (/.*[!#$%&?"]+/.test(PassValue)) {
            PasswordReqList[3].classList.add("text-blue-700");
        } else {
            PasswordReqList[3].classList.remove("text-blue-700");
        }
        if (/.{8,}$/.test(PassValue)) {
            PasswordReqList[0].classList.add("text-blue-700");
        } else {
            PasswordReqList[0].classList.remove("text-blue-700");
        }
    }
});


confirm_password.addEventListener('blur',()=>{
    let  confirm_passValue =  confirm_password.value
    if(confirm_passValue === ""){
        confirm_password.classList.add("border-red-600")
        confirm_password.nextElementSibling.classList.add("text-red-800")
        confirm_password.nextElementSibling.innerHTML = `${empty_message}`;
    }
    else if(confirm_passValue === PassValue){
        confirm_password.classList.add("border-blue-600")
        confirm_password.nextElementSibling.classList.add("text-green-600")
        confirm_password.nextElementSibling.innerHTML = `${success_message}`;
    }else if(confirm_passValue !== PassValue){
        confirm_password.classList.add("border-red-600")
        confirm_password.nextElementSibling.classList.add("text-red-600")
        confirm_password.nextElementSibling.innerHTML = `${error_message} Password Is not Match `;
    }
})





// /^            : Start
// (?=.{8,})        : Length
// (?=.*[a-zA-Z])   : Letters
// (?=.*\d)         : Digits
// (?=.*[!#$%&? "]) : Special characters
// $/              : End



//     (/^
//     (?=.*\d)                //should contain at least one digit
//     (?=.*[a-z])             //should contain at least one lower case
//     (?=.*[A-Z])             //should contain at least one upper case
//     [a-zA-Z0-9]{8,}         //should contain at least 8 from the mentioned characters

//     $/)

// Example:-   /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/