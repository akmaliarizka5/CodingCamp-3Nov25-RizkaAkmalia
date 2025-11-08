// Display welcome message
welcomeMessage();

// Function welcome message
function welcomeMessage() {
    let name = prompt("Please enter your name:");

    if (name != null && name.trim() != "") {
        document.getElementById("welcome-speech").innerText = "Hello " + name + ", Welcome to our website!";
    } else {
        alert("Please enter your name first!");
    }
}

// Contact Me Form Preview
function initContactForm() {
    const form = document.querySelector('form');

    const inputs = {
        name: document.getElementById('name'),
        dob: document.getElementById('dob'),
        gender: document.querySelectorAll('input[name="gender"]'),
        message: document.getElementById('message')
    };
    
    const previews = {
        name: document.getElementById('preview-name'),
        dob: document.getElementById('preview-dob'),
        gender: document.getElementById('preview-gender'),
        message: document.getElementById('preview-message')
    };

    // Reset form function
    function resetForm() {
        form.reset();
        Object.keys(previews).forEach(key => {
            previews[key].textContent = '—';
        });
    }
    
    // Validate Form
    function validateForm() {
        const nameRegex = /^[a-zA-Z\s'-]+$/;

        // Check name
        if (!inputs.name && !inputs.name.value.trim()) {
            inputs.name.focus();
            resetForm();
            return false;
        }

        // Additional name regex validation
        if (!nameRegex.test(inputs.name.value.trim())) {
            alert('Name can only contain letters, spaces, hyphens and apostrophes ⚠️');
            inputs.name.focus();
            resetForm();
            return false;
        }

        // Check date of birth
        if (!inputs.dob && inputs.dob.value) {
            inputs.dob.focus();
            resetForm();
            return false;
        }

        // Check message
        if (!inputs.message && inputs.message.value.trim()) {
            inputs.message.focus();
            resetForm();
            return false;
        }

        // Check gender
        const selectedGender = form.querySelector('input[name="gender"]:checked');
        if (!selectedGender) {
            alert('Please select your gender');
            resetForm();
            return false;
        }
        
        return true;
    }

    // Remove live preview listeners and set initial preview values
    Object.keys(previews).forEach(key => {
        previews[key].textContent = '—';
    });
    
    // Handle form submission
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!validateForm()) {
                return;
            }
            
            // Update all previews after successful validation
            ['name', 'dob', 'message'].forEach(key => {
                previews[key].textContent = inputs[key].value || '—';
            });

            // Handle gender preview
            const selectedGender = form.querySelector('input[name="gender"]:checked');
            previews.gender.textContent = selectedGender ? selectedGender.value : '—';
            
            alert('Message sent successfully! ✓');
        });

        // Handle Reset
        form.addEventListener('reset', () => {
            setTimeout(() => {
                Object.keys(previews).forEach(key => {
                    previews[key].textContent = '—';
                });
            }, 0);
        });
    }
}

document.addEventListener('DOMContentLoaded', initContactForm);