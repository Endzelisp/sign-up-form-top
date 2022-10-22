"use strict"

const signUpForm = document.querySelector('.main-container__form > form');
const passwordEl = signUpForm.querySelector('input[name="password"]');
const passwordCheckEl = signUpForm.querySelector('input[name="password-check"]');
const verificationMessage = signUpForm.querySelector('input[name="password-check"] + span');
const submitBtnEl = signUpForm.querySelector('button[type="submit"]');

function passwordCheck () {
  return passwordEl.value === passwordCheckEl.value;
};

passwordCheckEl.addEventListener('input', () => {
  if (passwordCheck()) {
    verificationMessage.textContent = `Password match`;
  } else {
    verificationMessage.textContent = `Password didn't match`;
  }
});