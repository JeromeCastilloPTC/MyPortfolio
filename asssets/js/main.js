function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    var responseName = document.getElementById('responseName');
    var responseEmail = document.getElementById('responseEmail');
    var responseMSG = document.getElementById('responseMSG');
    var submittedData = document.getElementById('submittedData');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }

    if(Name.value || email.value || msg.value){
        submittedData.textContent = 'Submitted Information:';
    }

    if(Name.value){
        responseName.textContent = 'Name: ' + Name.value;
    }

    if(email.value){
        responseEmail.textContent = 'Email: ' + email.value;
    }

    if(msg.value){
        responseMSG.textContent = 'Message: ' + msg.value;
    }



    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}