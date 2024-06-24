document.addEventListener("DOMContentLoaded", function() {
    // Create form element
    var form = document.createElement('form');
    form.id = 'contactForm';
    form.style.backgroundColor = 'white';
    form.style.padding = '30px';
    form.style.borderRadius = '6px';
    form.onsubmit = function() { return validateForm(); };

    var h1 = document.createElement('h1')
    h1.textContent = 'Get-In Touch';
    h1.style.textAlign = 'center';
    h1.style.textTransform = 'uppercase';

    form.appendChild(h1);

    // Helper function to create input fields with labels and error messages
    function createField(labelText, inputType, inputId) {
        var fieldWrapper = document.createElement('div');
        fieldWrapper.innerHTML = `
            <label for="${inputId}">${labelText}</label>
            <input type="${inputType}" id="${inputId}" name="${inputId}">
            <br>
            <span id="${inputId}Error" style="color:red"></span>
        `;
        fieldWrapper.style.cssText = `

        `;
        return fieldWrapper;
    }

    // Create and append form fields
    form.appendChild(createField('Full Name ', 'text', 'fullName'));
    form.appendChild(createField('Email ', 'email', 'email'));
    form.appendChild(createField('Phone Number ', 'tel', 'phone'));

    // Create and append message field
    var messageField = document.createElement('div');
    messageField.innerHTML = `
        <label for="message">Message </label>
        <textarea id="message" name="message"></textarea>
        <br>
        <span id="messageError" style="color:red"></span>
    `;
    form.appendChild(messageField);

    // Create and append submit button
    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    // Append form to body
    document.body.appendChild(form);

    // Validation function
    window.validateForm = function() {
        let isValid = true;

        // Clear previous error messages
        ['fullNameError', 'emailError', 'phoneError', 'messageError'].forEach(id => {
            document.getElementById(id).textContent = '';
        });

        // Validate Full Name
        var fullName = document.getElementById('fullName').value;
        if (!fullName) {
            document.getElementById('fullNameError').textContent = 'Full Name is required.';
            isValid = false;
        }

        // Validate Email
        var email = document.getElementById('email').value;
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // Validate Phone Number
        var phone = document.getElementById('phone').value;
        var phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
            isValid = false;
        }

        // Validate Message
        var message = document.getElementById('message').value;
        if (!message) {
            document.getElementById('messageError').textContent = 'Message is required.';
            isValid = false;
        }

        return isValid;
    };
});
