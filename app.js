const form = document.querySelector('#create-account-form');
const fnameInput = document.querySelector('#fname');
const lnameInput = document.querySelector('#lname');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //first name
    if(fnameInput.value.trim()==''){
        setError(fnameInput, 'First Name can not be empty');
    }else if(fnameInput.value.trim().length <3 || fnameInput.value.trim().length > 15){
        setError(fnameInput, 'First Name must be min 3 and max 15 charecters');
    }else {
        setSuccess(fnameInput);
    }
    //last name
    if(lnameInput.value.trim()==''){
        setError(lnameInput, 'Last Name can not be empty');
    }else if(lnameInput.value.trim().length <3 || lnameInput.value.trim().length > 15){
        setError(lnameInput, 'Last Name must be min 3 and max 15 charecters');
    }else {
        setSuccess(lnameInput);
    }
    //email
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Provide email address');
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }else{
        setError(emailInput, 'Provide valid email address');
    }

    
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}



