const Submit = document.getElementById("submit-btn");
const Password = document.getElementById("Password");
const Email = document.getElementById("email");
const Button = document.querySelector(".getEmail");
const Button2 = document.querySelector(".getpass");

let show = "";
let check = null;

Button2.addEventListener('click',()=>{
    Password.setAttribute("type","text");
    show = Password.value;
    console.log(show);
})

Button.addEventListener('click',()=>{
    show = Email.value;
    console.log(show);
    // check();
})



if(Email.value !== " "){
    // Submit.setAttribute("disabled",'');
    check = false
}else{
    check = true
    // Submit.removeAttribute('disabled');

}

Submit.disabled=check;
