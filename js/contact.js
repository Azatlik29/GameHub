// Contact form validation (no browser default messages)
const form = document.getElementById('contact-form');
const fieldIds = ['name', 'email', 'topic', 'message'];

// each function returns '' when the value is OK, or an error text
function validateName(value) {
    return value.trim().length < 2 ? 'Name must be at least 2 characters.' : '';
}

function validateEmail(value) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value) ? '' : 'Enter a valid email, for example name@example.com.';
}

function validateTopic(value) {
    return value === '' ? 'Please choose a topic.' : '';
}

function validateMessage(value) {
    return value.trim().length < 10 ? 'Message must be at least 10 characters.' : '';
}

const validators = {
    name: validateName,
    email: validateEmail,
    topic: validateTopic,
    message: validateMessage
};

// checks one field and shows the error next to it
function checkField(id) {
    const input = document.getElementById(id);
    const error = validators[id](input.value);
    document.getElementById(id + '-error').textContent = error;
    input.classList.toggle('is-invalid', error !== '');
    input.classList.toggle('is-valid', error === '');
    return error === '';
}

fieldIds.forEach(id => {
    document.getElementById(id).addEventListener('input', () => checkField(id));
});

form.addEventListener('submit', event => {
    event.preventDefault();
    let allValid = true;
    for (const id of fieldIds) {
        if (!checkField(id)) allValid = false;
    }
    if (allValid) {
        form.reset();
        fieldIds.forEach(id => document.getElementById(id).classList.remove('is-valid'));
        $('#form-success').fadeIn().delay(3000).fadeOut();
    }
});
