import throttle from 'lodash.throttle';
import storage from "./storage";

const formRef = document.querySelector('.feedback-form');
updateForm();

formRef.addEventListener('submit', onSubmitClick);
formRef.addEventListener('input', throttle(onFormInputClick, 500));

function onFormInputClick(evt) {
    let savedData = storage.load('feedback-form-state');
    if (savedData) {
        savedData[evt.target.name] = evt.target.value;
    } else {
        savedData = {};
        savedData[evt.target.name] = evt.target.value;
    }
    storage.save('feedback-form-state', savedData);
};

function onSubmitClick(evt) {
    evt.preventDefault();
    const userData = storage.load('feedback-form-state');
    if (userData) {
        console.log(userData);
    };

    storage.remove('feedback-form-state');
    evt.target.reset();
}

function updateForm() {
    const userData = storage.load('feedback-form-state');
    if (userData) {
        Object.entries(userData).forEach(([name, value]) => {
            formRef.elements[name].value = value;
        })
    }
};