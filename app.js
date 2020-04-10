var login_btn = document.getElementById("login-btn");
var signup_btn = document.getElementById("signup-btn");

var login_form = document.getElementById("login-form");
var signup_form = document.getElementById("signup-form");

login_btn.addEventListener("click", function(){
    login_btn.classList.add ("active");
    signup_btn.classList.remove ("active");
    login_form.style.display = "block";
    signup_form.style.display = "none";
    login_form.style.animation = "ease-out 1s showForm"
})

signup_btn.addEventListener("click", function(){
    login_btn.classList.remove ("active");
    signup_btn.classList.add ("active");
    login_form.style.display = "none";
    signup_form.style.display = "block";
    signup_form.style.animation = "ease-out 1s showForm"
})

var login_sub = document.getElementById("login-sub");
var signup_sub = document.getElementById("signup-sub");

var login_email = document.getElementById("login-email");
var login_password = document.getElementById("login-password");

var signup_username = document.getElementById("signup-username");
var signup_email = document.getElementById("signup-email");
var signup_password = document.getElementById("signup-password");
var signup_vpassword = document.getElementById("signup-vpassword");

var login_error = document.getElementById("login-error");
var signup_error = document.getElementById("signup-error");

login_sub.addEventListener("click", function(){
    if(localStorage[login_email.value] == login_password.value){
        login_error.style.color = "#00B056"
        login_error.innerHTML = "login is successfully"
    }else {
        login_error.style.color = "#FF004D"
        login_error.innerHTML = "username or email or password is not correct"
    }
    
    
})




signup_sub.addEventListener("click", function(){
    if(signup_username.value == "" || signup_email.value == "" || signup_password.value == "" || signup_vpassword.value == ""){
        signup_error.innerHTML = "please fill out all of the form"
    }else{
        if(signup_password.value == signup_vpassword.value){
            if(signup_password.value.length >= 8){
                if(signup_username.value.length >= 5){
                    if(signup_username.value in localStorage || signup_email.value in localStorage){
                        signup_error.style.color = "#00B056"
                        signup_error.innerHTML = "username or eamil was register"
                    }else {
                        signup_error.innerHTML = ""
                        localStorage.setItem(signup_username.value, signup_password.value);
                        localStorage.setItem(signup_email.value, signup_password.value);
                        signup_username.value = "";
                        signup_email.value = "";
                        signup_password.value = "";
                        signup_vpassword.value = "";
                        signup_error.style.color = "#00FF13"
                        signup_error.innerHTML = "signup is successfully"
                    }
                }else {
                    signup_error.innerHTML = "username is less than 5 character please try again"
                }
                
                

            } else {
                signup_error.innerHTML = "password is less than 8 character please try again"
            }
            
        }else {
            signup_error.innerHTML = "password and verify password is not match"
        }
    }
    
})