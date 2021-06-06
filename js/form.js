// form validation
const form = document.querySelector("form")
const fullName = document.querySelector("#fullname");
const fullNameError = document.querySelector("#fullname_error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email_error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject_error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message_error");
const button = document.querySelector(".cta_btn");
const feedback = document.querySelector(".feedback");

function validateFullName(event) {
    event.preventDefault();
    if (checkLength(fullName.value, 5) === true) {
        fullNameError.style.display = "none";
    }
    else {
        fullNameError.style.display = "block";
    }
}
function validateSubject(event) {
    event.preventDefault();
    if (checkLength(subject.value, 15) === true) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }
}
function validateMessage(event) {
    event.preventDefault();
    if (checkLength(message.value, 25) === true) {
        messageError.style.display = "none";
    }
    else {
        messageError.style.display = "block";
    }
}
function validateEmailField(event) {
    event.preventDefault();
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
}

fullName.addEventListener("blur", validateFullName);
subject.addEventListener("blur", validateSubject);
message.addEventListener("blur", validateMessage);
email.addEventListener("blur", validateEmailField);

function checkIfButtonDisabled() {
    if (validateFullName && validateEmail) {
        button.disabled = false;
    }
    else {
        feedback.innerHTML = "";
        button.disabled = true;
    }
}

fullName.addEventListener("keyup", checkIfButtonDisabled);
email.addEventListener("keyup", checkIfButtonDisabled);

function submitForm(event) {
    event.preventDefault();
    feedback.innerHTML = '<div class="feedback">Your message has been sent!</div>';
    form.reset();
}

form.addEventListener("submit", submitForm);

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}