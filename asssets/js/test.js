var email = document.getElementById('email');
var submitBtn = document.getElementById('loginbtn');
var responseText = document.getElementById('response');

submitBtn.addEventListener('click', Login);

function Login(){
    if(email.value){
        responseText.textContent = email.value;
    }else{
        responseText.textContent = 'Email is Required';
    }
}