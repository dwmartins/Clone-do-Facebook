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


// login 

function entrar(){
    
    var login = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    if(login == '' || senha == ''){
        alert('complete os campos por favor');
    }else {
        document.getElementById('formulario').submit();
    }
    
}