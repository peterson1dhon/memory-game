const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');


const validateInput = ({target}) => {
  if (target.value.length >= 3) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
}

const handleSubmit = (event) => {
  event.preventDefault();
}


input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);



























