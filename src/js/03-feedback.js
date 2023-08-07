import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const LOCALSTORAGE_KEY = "feedback-form-state";

const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
const parcedData = JSON.parse(savedData);

let objectText = null;
    
form.addEventListener("input", throttle(saveMessage, 500));
form.addEventListener("submit", onSubmit);

updateOutput();

function saveMessage(event) {
objectText = {
        email: form.elements.email.value,
        message: form.elements.message.value,
};
  
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectText)); 
};

function updateOutput() {
    if (savedData) {
    form.elements.email.value = parcedData.email || '';
    form.elements.message.value = parcedData.message || '';
  }

}

updateOutput();

function onSubmit(event) {
  event.preventDefault();

    const beforeSubmitValues = {
    email: form.elements.email.value,
    message: form.elements.message.value,
 }
console.log(beforeSubmitValues);

  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
  objectText = {};
}

