var email = document.getElementById('email');
var password = document.getElementById('password');

email.addEventListener('focus',()=>{
    email.style.borderColor = "#297deb";
})

email.addEventListener('blur',()=>{
    email.style.borderColor = "#ccc"
})

password.addEventListener('focus',()=>{
    password.style.borderColor = "#297deb";
})

password.addEventListener('blur',()=>{
    password.style.borderColor = "#ccc"
})

