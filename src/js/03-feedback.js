import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const feedbackKey = 'feedback-form-state';

const saveToLocalStorage = () => {
  const feedbackState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(feedbackKey, JSON.stringify(feedbackState));
};

const populateForm = () => {
  const feedbackState = JSON.parse(localStorage.getItem(feedbackKey));
  if (feedbackState) {
    emailInput.value = feedbackState.email;
    messageInput.value = feedbackState.message;
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const feedbackState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.removeItem(feedbackKey);
  emailInput.value = '';
  messageInput.value = '';
  console.log(feedbackState);
};

form.addEventListener('input', throttle(saveToLocalStorage, 500));
window.addEventListener('load', populateForm);
form.addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.querySelector('input[name="email"]');
  const messageTextarea = document.querySelector('textarea[name="message"]');

  const storedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (storedData) {
    emailInput.value = storedData.email;
    messageTextarea.value = storedData.message;
  } else {
    emailInput.value = '';
    messageTextarea.value = '';
  }
});
