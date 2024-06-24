// document.addEventListener("DOMContentLoaded", function() {
   
//     var form = document.createElement('form');
//     form.setAttribute('id', 'contactForm');
//     form.setAttribute('onsubmit', 'return validateForm()');

//     function createFormField(labelText, inputType, inputId, inputName) {
//         var fieldWrapper = document.createElement('div');
//         var label = document.createElement('label');
//         label.textContent = labelText;
//         var input = document.createElement('input');
//         input.setAttribute('type', inputType);
//         input.setAttribute('id', inputId);
//         input.setAttribute('name', inputName);
//         var errorMessage = document.createElement('span');
//         errorMessage.setAttribute('id', `${inputId}Error`);
//         errorMessage.style.color = 'red';
//         fieldWrapper.appendChild(label);
//         fieldWrapper.appendChild(input);
//         fieldWrapper.appendChild(document.createElement('br'));
//         fieldWrapper.appendChild(errorMessage);
//         return fieldWrapper;
//     }

  
//     form.appendChild(createFormField('Full Name: ', 'text', 'fullName', 'fullName'));


//     form.appendChild(createFormField('Email: ', 'email', 'email', 'email'));


//     form.appendChild(createFormField('Phone Number: ', 'tel', 'phone', 'phone'));

   
//     var messageFieldWrapper = document.createElement('div');


//     var messageLabel = document.createElement('label');
//     messageLabel.textContent = 'Message: ';
//     var messageTextarea = document.createElement('textarea');
//     messageTextarea.setAttribute('id', 'message');
//     messageTextarea.setAttribute('name', 'message');
//     var messageError = document.createElement('span');
//     messageError.setAttribute('id', 'messageError');
//     messageError.style.color = 'red';
//     messageFieldWrapper.appendChild(messageLabel);
//     messageFieldWrapper.appendChild(messageTextarea);
//     messageFieldWrapper.appendChild(document.createElement('br'));
//     messageFieldWrapper.appendChild(messageError);
//     form.appendChild(messageFieldWrapper);

    
//     var submitButton = document.createElement('button');
//     submitButton.setAttribute('type', 'submit');
//     submitButton.textContent = 'Submit';
//     form.appendChild(submitButton);

   
//     document.body.appendChild(form);

   
//     window.validateForm = function() {
//         let isValid = true;

        
//         document.getElementById('fullNameError').textContent = '';
//         document.getElementById('emailError').textContent = '';
//         document.getElementById('phoneError').textContent = '';
//         document.getElementById('messageError').textContent = '';

       
//         var fullName = document.getElementById('fullName').value;
//         if (fullName === "") {
//             document.getElementById('fullNameError').textContent = 'Full Name is required.';
//             isValid = false;
//         }

      
//         var email = document.getElementById('email').value;
//         var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (!emailPattern.test(email)) {
//             document.getElementById('emailError').textContent = 'Please enter a valid email address.';
//             isValid = false;
//         }

       
//         var phone = document.getElementById('phone').value;
//         var phonePattern = /^[0-9]{10}$/;
//         if (!phonePattern.test(phone)) {
//             document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
//             isValid = false;
//         }

        
//         var message = document.getElementById('message').value;
//         if (message === "") {
//             document.getElementById('messageError').textContent = 'Message is required.';
//             isValid = false;
//         }

//         return isValid;
//     }
// });


document.addEventListener("DOMContentLoaded", function() {
    // Create form element
    const form = document.createElement('form');
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
        const fieldWrapper = document.createElement('div');
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
    const messageField = document.createElement('div');
    messageField.innerHTML = `
        <label for="message">Message </label>
        <textarea id="message" name="message"></textarea>
        <br>
        <span id="messageError" style="color:red"></span>
    `;
    form.appendChild(messageField);

    // Create and append submit button
    const submitButton = document.createElement('button');
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
});
