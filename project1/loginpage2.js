const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.register-login');
const registerLink = document.querySelector('.login-register');
const btnpopup = document.querySelector('.btnLogin-popup');
const icon = document.querySelector('.icon-close');

registerLink.addEventListener('click',() => {

    wrapper.classList.add('active');
});

loginLink.addEventListener('click',() => {

    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click',() => {

    wrapper.classList.add('active-popup');
});

icon.addEventListener('click',() => {

    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    
});