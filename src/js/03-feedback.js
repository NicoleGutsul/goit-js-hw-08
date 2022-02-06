import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const formData = {};
const STORAGE_KEY_FORM = 'feedback-form-state';

fillFormFromStorage();

formEl.addEventListener('input', throttle(onFormInput, 500));

formEl.addEventListener('submit', onFormSubmit);

function fillFormFromStorage() {
  const dataFormSaved = JSON.parse(localStorage.getItem(STORAGE_KEY_FORM));
  if (dataFormSaved) {
    Object.keys(dataFormSaved).forEach(keyName => {
      const savedValue = dataFormSaved[keyName];

      formData[keyName] = savedValue;
      formEl.elements[keyName].value = savedValue;
    });
  }
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY_FORM, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY_FORM);
  console.log(formData);
  Object.keys(formData).forEach(keyName => {
    delete formData[keyName];
  });
}