import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormInput, 500));

const submitBtn = document.querySelector('[type="submit"]');
submitBtn.addEventListener('click', onFormSubmit);

const emailInput = document.querySelector('[name="email"]');
const nameInput = document.querySelector('[name="message"]');

localTextarea();

const formData = {};

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  form.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formData);
}

function localTextarea() {
  const savedInput = localStorage.getItem('feedback-form-state');
  const readyInput = JSON.parse(savedInput);
  if (readyInput) {
    emailInput.value = readyInput.email;
    nameInput.value = readyInput.message;
  }
}