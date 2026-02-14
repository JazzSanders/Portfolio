const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.querySelector('#strength-text span');

// Requirement list items
const reqLength = document.getElementById('length');
const reqSpecial = document.getElementById('special');
const reqNumber = document.getElementById('number');

passwordInput.addEventListener('input', () => {
    const val = passwordInput.value;
    let score = 0;

    // 1. Check Length
    if (val.length >= 8) {
        score++;
        reqLength.classList.add('valid');
    } else {
        reqLength.classList.remove('valid');
    }

    // 2. Check for Special Characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(val)) {
        score++;
        reqSpecial.classList.add('valid');
    } else {
        reqSpecial.classList.remove('valid');
    }

    // 3. Check for Numbers
    if (/\d/.test(val)) {
        score++;
        reqNumber.classList.add('valid');
    } else {
        reqNumber.classList.remove('valid');
    }

    updateUI(score, val.length);
});

function updateUI(score, length) {
    let width = "0%";
    let color = "#eee";
    let text = "None";

    if (length > 0) {
        if (score === 0) {
            width = "20%";
            color = "#dc3545"; // Red
            text = "Very Weak";
        } else if (score === 1) {
            width = "40%";
            color = "#ffc107"; // Yellow
            text = "Weak";
        } else if (score === 2) {
            width = "70%";
            color = "#17a2b8"; // Blue
            text = "Good";
        } else if (score === 3) {
            width = "100%";
            color = "#28a745"; // Green
            text = "Strong";
        }
    }

    strengthBar.style.width = width;
    strengthBar.style.backgroundColor = color;
    strengthText.innerText = text;
    strengthText.style.color = color;
}