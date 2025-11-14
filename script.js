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

/*
  Note to self:
  This function looks at the input's parent ".form-group"
  and finds the matching ".error-message" div.
  We use this to put the right error under the right field.
*/
const getErrorElement = (inputElement) => {
  const formGroup = inputElement.closest(".form-group");
  if (!formGroup) {
    return null;
  }

  const errorDiv = formGroup.querySelector(".error-message");
  return errorDiv;
};

console.log("getErrorElement helper is ready."); // Note to self: Function is defined.by TN

// ---------- Helper: show an error for a field ----------

/*
  Note to self:
  This function:
  - Gets the matching error div for the input
  - Puts message text inside that div
  - Adds the 'invalid' class to the input (red border)
  - Removes the 'valid' class (if it was there)
*/
const showError = (inputElement, message) => {
  const errorDiv = getErrorElement(inputElement);

  if (errorDiv) {
    errorDiv.textContent = message;
  }

  inputElement.classList.remove("valid");
  inputElement.classList.add("invalid");

  console.log("showError called for:", inputElement.id, "message:", message);
};

console.log("showError function is ready."); // Note to self: Function is defined.

/*
  Note to self:
  This function:
  - Clears the error text in the matching error div
  - Adds 'valid' class to the input (green border)
  - Removes 'invalid' class
*/
const clearError = (inputElement) => {
  const errorDiv = getErrorElement(inputElement);

  if (errorDiv) {
    errorDiv.textContent = "";
  }

  inputElement.classList.remove("invalid");
  inputElement.classList.add("valid");

  console.log("clearError called for:", inputElement.id);
};

console.log("clearError function is ready."); // Note to self: Function is defined.

// ---------- Helper: set form-level message (top/bottom status) ----------

/*
  Note to self:
  This shows a big message for the whole form, like
  "Registration successful" or "Please fix errors".
*/
const setFormMessage = (message, type) => {
  formMessage.textContent = message || "";

  // Remove both classes first
  formMessage.classList.remove("success", "error");

  if (type === "success") {
    formMessage.classList.add("success");
  } else if (type === "error") {
    formMessage.classList.add("error");
  }

  console.log("Form message set:", message, "type:", type);
};

console.log("setFormMessage function is ready."); // Note to self: Function is defined

// ---------- Load saved username from localStorage on page load ----------

/*
  Note to self:
  When the page loads, we check if we previously saved a username
  in localStorage under the key "savedUsername".
  If it exists, we put it into the username field for convenience.
*/
const loadSavedUsername = () => {
  const savedUsername = localStorage.getItem("savedUsername");
  console.log("Saved username from localStorage:", savedUsername);

  if (savedUsername) {
    usernameInput.value = savedUsername;
    usernameInput.classList.add("valid");
  }
};

console.log("loadSavedUsername function is ready."); // Note: This function is defined.

// Note to self: Run this when the page is fully loaded.
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded. Now loading saved username.");
  loadSavedUsername();
});

// Note to self: At this point, basic setup and helpers are done.
// Time to implement individual validation for each field.
