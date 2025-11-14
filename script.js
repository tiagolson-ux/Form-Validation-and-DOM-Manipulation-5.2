// Lab 5.2 Form Validation JS (by-TN)
// Note: This file controls the behavior of the form with the JavaScript.

// ---------- Grab important DOM elements ----------

// Note: Get the whole form element so we can listen for submit.
const form = document.querySelector("#registrationForm");
console.log("Form selected:", form); // Note to self: Check that the form is found.

// Note: Get each input so we can read their values and validate them.
const usernameInput = document.querySelector("#username");
console.log("Username input selected:", usernameInput);

const emailInput = document.querySelector("#email");
console.log("Email input selected:", emailInput);

const passwordInput = document.querySelector("#password");
console.log("Password input selected:", passwordInput);

const confirmPasswordInput = document.querySelector("#confirmPassword");
console.log("Confirm password input selected:", confirmPasswordInput);

// Note: This element will show general form-level messages.
const formMessage = document.querySelector("#formMessage");
console.log("Form message area selected:", formMessage);
