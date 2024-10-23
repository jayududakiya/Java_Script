const loginForm = document.getElementById("login-form")
const registerForm = document.getElementById("register-form")
const formData = [];



registerForm.addEventListener("submit",(evn)=>{
    RegisterData();
    evn.preventDefault();
})

function RegisterData (){
    let user = registerForm.querySelector(".user-input").value,
        email = registerForm.querySelector(".email-input").value,
        password = registerForm.querySelector(".password-input").value;
    // 
    let F_formData = JSON.parse(localStorage.getItem("formData"))
    // 
    formData = F_formData.filter((data)=>{
        return (data.user === user && data.email === email && data.password === password)
    })
    // 
    if(formData.length === 0){
        formData.push({user,email,password})
        localStorage.setItem("formData",JSON.stringify(formData))
    }else{
        alert('OOOPPSSS YOU ARE ALREADY USER ');
        document.getElementById("chk").checked = false  ; 
        loginForm.querySelector(".email-input").focus();
        registerForm.reset();
    }
    
}
    


loginForm.addEventListener("submit",(evn)=>{    
    LogInData();
    evn.preventDefault();
});


function LogInData () {
    let formData = JSON.parse(localStorage.getItem("formData"))
    // 
    let email = loginForm.querySelector(".email-input").value,
    password = loginForm.querySelector(".password-input").value;
    formData =  formData.filter((data)=>{
        return (data.email === email && data.password === password);
    })
    // 
    if(formData.length === 0){
            alert("your user name is not found ")
            // console.log(formData);
            // registerForm.querySelector(".user-input").focus();
            document.getElementById("chk").checked = true; 
    }else{
            // console.log(formData);
            alert("your login was sussesfull")
            loginForm.reset();
    }
}

