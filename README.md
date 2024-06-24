# JavaScript Form Validation Example

This project demonstrates how to create a simple contact form using JavaScript with full validation. The form includes fields for full name, email, phone number, and a message, with validation to ensure the inputs are correct.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This example showcases a contact form created with JavaScript, which includes client-side validation for each input field. Error messages are displayed directly below the respective input fields when the user submits the form with invalid data.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/cinereoustechnologies/FormValidation.git
    ```
2. Navigate to the project directory:
    ```sh
    cd javascript-form-validation
    ```

## Usage

1. Open `index.html` in your web browser to view the form.
2. Fill in the form fields and submit to see the validation in action.

## Code Explanation

The JavaScript code performs the following steps to create and validate the form:

### Setting up the Environment

We use the `DOMContentLoaded` event listener to ensure the script runs after the DOM is fully loaded.

### Creating the Form Element 

Inside the DOMContentLoaded event listener, we create the form element, set its id to 'contactForm', and assign a validateForm function to run on form submission.
 
    ```sh
    const form = document.createElement('form');
    form.id = 'contactForm';
    form.onsubmit = function() { return validateForm(); };
    ```

### Helper Function to Create Input Fields

We define a helper function createField that creates a form field (label, input, line break, and error message span) and returns it.

    ```sh
    function createField(labelText, inputType, inputId) {
    const fieldWrapper = document.createElement('div');
    fieldWrapper.innerHTML = `
        <label for="${inputId}">${labelText}</label>
        <input type="${inputType}" id="${inputId}" name="${inputId}">
        <br>
        <span id="${inputId}Error" style="color:red"></span>
    `;
    return fieldWrapper;
    }
    ```

### Creating and Appending Form Fields

We use the createField helper function to create fields for full name, email, and phone number, and then append these fields to the form. For the message field, we create it manually since it uses a textarea instead of an input.

    ```sh
        form.appendChild(createField('Full Name: ', 'text', 'fullName'));
    form.appendChild(createField('Email: ', 'email', 'email'));
    form.appendChild(createField('Phone Number: ', 'tel', 'phone'));

    const messageField = document.createElement('div');
    messageField.innerHTML = `
        <label for="message">Message: </label>
        <textarea id="message" name="message"></textarea>
        <br>
        <span id="messageError" style="color:red"></span>
    `;
    form.appendChild(messageField);
    ```

### Creating and Appending the Submit Button

We create a submit button and append it to the form.

    ```sh 
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);
    ```
### Appending the Form to the Document Body

We append the entire form to the document body so it becomes visible on the webpage.

    ```sh
    document.body.appendChild(form);
    ```

### Validation Function

We define the validateForm function which is called upon form submission. This function checks the validity of each input field and displays appropriate error messages below the respective fields.
```sh
window.validateForm = function() {
    let isValid = true;

    // Clear previous error messages
    ['fullNameError', 'emailError', 'phoneError', 'messageError'].forEach(id => {
        document.getElementById(id).textContent = '';
    });

    // Validate Full Name
    const fullName = document.getElementById('fullName').value;
    if (!fullName) {
        document.getElementById('fullNameError').textContent = 'Full Name is required.';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Phone Number
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('message').value;
    if (!message) {
        document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    }

    return isValid;
};
```
```sh
# Clear previous error messages: Before validating, we clear any existing error messages.
# Validate Full Name: Check if the full name field is empty.
# Validate Email: Use a regular expression to check if the email is in a valid format.
# Validate Phone Number: Use a regular expression to check if the phone number is a valid 10-digit number.
# Validate Message: Check if the message field is empty.
# Return Validation Result: Return true if all fields are valid, otherwise return false.
```

# Contact
 Your Name - Chandini  - chandini@cinereoustechnologies.com

Project Link: https://github.com/cinereoustechnologies/FormValidation.git





