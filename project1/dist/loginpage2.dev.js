"use strict";

var wrapper = document.querySelector('.wrapper');
var loginLink = document.querySelector('.login-link');
var registerLink = document.querySelector('.login-register');
registerLink.addEventListener('click', function () {
  wrapper.classList.add('active');
});