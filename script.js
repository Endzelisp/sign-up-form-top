"use strict"

const signUpForm = document.querySelector('.main-container__form > form');
const firstName = document.querySelector('input[name="first-name"]');
const lastName = document.querySelector('input[name="last-name"]');
const passwordEl = signUpForm.querySelector('input[name="password"]');
const passwordCheckEl = signUpForm.querySelector('input[name="password-check"]');
const verificationMessage = signUpForm.querySelector('input[name="password-check"] + span');
const submitBtnEl = signUpForm.querySelector('button[type="submit"]');

function capitalize (str) {
  str = str.toLowerCase().trim();
  let firstLtrCap = str.charAt(0).toUpperCase();
  let remainingLtrs = str.substring(1);
  return `${firstLtrCap}${remainingLtrs}`
};

function passwordCheck () {
  return passwordEl.value === passwordCheckEl.value;
};

firstName.addEventListener('input', () => {
  let userName = firstName.value;
  let userNameArray = userName.split(' ');
  let userNameArrayCap = userNameArray.map(item => capitalize(item));
  let userNameCap = userNameArrayCap.join(' ');
  firstName.value = userNameCap;
});

lastName.addEventListener('input', () => {
  let userName = lastName.value;
  let userNameArray = userName.split(' ');
  let userNameArrayCap = userNameArray.map(item => capitalize(item));
  let userNameCap = userNameArrayCap.join(' ');
  lastName.value = userNameCap;
});

passwordCheckEl.addEventListener('input', () => {
  if (passwordCheck()) {
    verificationMessage.textContent = `Password match`;
    verificationMessage.style.color = 'black';
  } else {
    verificationMessage.textContent = `Password didn't match`;
    verificationMessage.style.color = 'red';
  }
});

submitBtnEl.addEventListener('pointerdown', () => {
  if (!passwordCheck()) {
    passwordCheckEl.setCustomValidity('Password did not match');
  } else {
    passwordCheckEl.setCustomValidity('');
  }
})