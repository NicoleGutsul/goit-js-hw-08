const throttle = require('lodash.throttle');

const INPUT_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

const formData = {};
populateTextarea();

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(INPUT_KEY);
};

function onTextareaInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(INPUT_KEY, JSON.stringify(formData));
};

function populateTextarea() {
    let keepMessage = localStorage.getItem(INPUT_KEY);
    if (keepMessage) {
        keepMessage = JSON.parse(keepMessage);
        Object.entries(keepMessage).forEach(([name, value]) => {
            refs.form.elements[name].value = value;
        });

    }
}
