const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('button');
const errorAlert = document.querySelectorAll('.errorAlert');
const errorMsg = document.querySelectorAll('.errorMsg');
const glyphicon = document.querySelector('.glyphicon');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fName = firstName.value;
    const lName = lastName.value;
    const emailVal = email.value;
    const passwordVal = password.value;
   
    if (fName === '') {
        firstName.classList.add('error');
        errorAlert[0].classList.remove('hide');
        errorMsg[0].classList.remove('hide')
     } else {
        firstName.classList.remove('error');
        errorAlert[0].classList.add('hide');
        errorMsg[0].classList.add('hide')
     }

     if (lName === '') {
        lastName.classList.add('error');
        errorAlert[1].classList.remove('hide');
        errorMsg[1].classList.remove('hide')
     } else {
        lastName.classList.remove('error');
        errorAlert[1].classList.add('hide');
        errorMsg[1].classList.add('hide')
     }

     if (!validateEmail(emailVal) || emailVal === '') {
        email.classList.add('error');
        errorAlert[2].classList.remove('hide');
        errorMsg[2].classList.remove('hide')
     } else {
        email.classList.remove('error');
        errorAlert[2].classList.add('hide')
        errorMsg[2].classList.add('hide')
     }

     if (passwordVal === '') {
        password.classList.add('error');
        errorAlert[3].classList.remove('hide')
        errorMsg[3].classList.remove('hide')
        glyphicon.classList.add('hide')
     } else {
        password.classList.remove('error');
        errorAlert[3].classList.add('hide');
        errorMsg[3].classList.add('hide')
        glyphicon.classList.remove('hide')
     }
});


glyphicon.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});



//validate email//
const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }