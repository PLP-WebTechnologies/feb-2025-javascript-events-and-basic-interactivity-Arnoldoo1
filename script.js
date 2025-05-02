document.addEventListener('DOMContentLoaded', () => {
    // --- Event Handling ---
    const clickMeBtn = document.getElementById('clickMeBtn');
    const hoverMeDiv = document.getElementById('hoverMe');
    const keypressInput = document.getElementById('keypressInput');
    const keypressDisplay = document.getElementById('keypressDisplay');
    const doubleClickBtn = document.getElementById('doubleClickBtn');
    const longPressMeDiv = document.getElementById('longPressMe');
    const longPressAction = document.getElementById('longPressAction');

    clickMeBtn.addEventListener('click', () => {
        alert('Button Clicked! ');
    });

    hoverMeDiv.addEventListener('mouseover', () => {
        hoverMeDiv.textContent = 'You are hovering!';
        hoverMeDiv.style.backgroundColor = 'yellow';
        hoverMeDiv.style.color = 'black';
    });

    hoverMeDiv.addEventListener('mouseout', () => {
        hoverMeDiv.textContent = 'Hover Over Me';
        hoverMeDiv.style.backgroundColor = '#f0f8ff';
        hoverMeDiv.style.color = '#333';
    });

    keypressInput.addEventListener('keypress', (event) => {
        keypressDisplay.textContent = `You pressed: ${event.key}`;
    });

    doubleClickBtn.addEventListener('dblclick', () => {
        alert('Secret Double Click Action Activated!');
    });

    let longPressTimer;
    longPressMeDiv.addEventListener('mousedown', () => {
        longPressTimer = setTimeout(() => {
            longPressAction.textContent = 'Long Press Detected! ✨';
            longPressAction.style.color = 'purple';
        }, 1500); // 1.5 seconds for long press
    });

    longPressMeDiv.addEventListener('mouseup', () => {
        clearTimeout(longPressTimer);
        longPressAction.textContent = '';
        longPressAction.style.color = '';
    });

    longPressMeDiv.addEventListener('mouseout', () => {
        clearTimeout(longPressTimer);
        longPressAction.textContent = '';
        longPressAction.style.color = '';
    });

    // --- Interactive Elements ---
    const changeBtn = document.getElementById('changeBtn');
    const changeableText = document.getElementById('changeableText');
    let textChanged = false;

    changeBtn.addEventListener('click', () => {
        if (!textChanged) {
            changeableText.textContent = 'Text Changed! ';
            changeBtn.textContent = 'Change Back';
            textChanged = true;
        } else {
            changeableText.textContent = 'Initial Text';
            changeBtn.textContent = 'Change Text';
            textChanged = false;
        }
    });

    // Image Gallery y
const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imageInfo = document.getElementById('imageInfo');

const images = [
    {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
        description: "Beautiful mountain landscape"
    },
    {
        url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800",
        description: "Forest pathway in autumn"
    },
    {
        url: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800",
        description: "Ocean sunset view"
    }
];

let currentIndex = 0;

function updateGallery() {
    galleryImage.src = images[currentIndex].url;
    galleryImage.alt = images[currentIndex].description;
    imageInfo.textContent = `${currentIndex + 1}/${images.length}: ${images[currentIndex].description}`;
    
    // Update button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateGallery();
    }
});

// Initialize gallery
updateGallery();

// Event Handling Section
document.getElementById('clickMeBtn').addEventListener('click', function() {
    alert('Button clicked!');
});

document.getElementById('hoverMe').addEventListener('mouseover', function() {
    this.textContent = 'You hovered over me!';
});

document.getElementById('hoverMe').addEventListener('mouseout', function() {
    this.textContent = 'Hover Over Me';
});

document.getElementById('keypressInput').addEventListener('keyup', function(e) {
    document.getElementById('keypressDisplay').textContent = `You typed: ${e.target.value}`;
});

document.getElementById('doubleClickBtn').addEventListener('dblclick', function() {
    alert('Secret message: You found the double click!');
});

let pressTimer;
document.getElementById('longPressMe').addEventListener('mousedown', function() {
    pressTimer = window.setTimeout(function() {
        document.getElementById('longPressAction').textContent = 'Long press detected!';
    }, 1000);
});

document.getElementById('longPressMe').addEventListener('mouseup', function() {
    clearTimeout(pressTimer);
});

document.getElementById('longPressMe').addEventListener('mouseleave', function() {
    clearTimeout(pressTimer);
});

// Interactive Elements Section
document.getElementById('changeBtn').addEventListener('click', function() {
    const textElement = document.getElementById('changeableText');
    textElement.textContent = textElement.textContent === 'Initial Text' 
        ? 'Text Changed!' 
        : 'Initial Text';
});

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const targetId = header.getAttribute('data-target');
        const content = document.getElementById(targetId);
        content.classList.toggle('open');
    });
});

document.getElementById('animateBtn').addEventListener('click', function() {
    const box = document.getElementById('animatedBox');
    box.classList.toggle('animate');
});

// Form Validation Section
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }
    
    // Email validation
    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }
    
    // Password validation
    const password = document.getElementById('password').value;
    if (password.trim() === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters';
        isValid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }
    
    if (isValid) {
        document.getElementById('formMessage').textContent = 'Form submitted successfully!';
    } else {
        document.getElementById('formMessage').textContent = '';
    }
});

    // Accordion Content
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            const isOpen = targetContent.classList.contains('open');

            // Close all open accordion items
            document.querySelectorAll('.accordion-content.open').forEach(content => {
                content.classList.remove('open');
            });

            // Toggle the clicked item
            if (!isOpen) {
                targetContent.classList.add('open');
            }
        });
    });

  // Animation
const animateBtn = document.getElementById('animateBtn');
const animatedBox = document.getElementById('animatedBox');

animateBtn.addEventListener('click', () => {
    animatedBox.classList.toggle('animate');
    
    // Update button text based on animation state
    if (animatedBox.classList.contains('animate')) {
        animateBtn.textContent = 'Stop Animation';
    } else {
        animateBtn.textContent = 'Animate Me';
    }
});

    // --- Form Validation ---
    const myForm = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const formMessage = document.getElementById('formMessage');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        validateForm();
    });

    function validateForm() {
        let isValid = true;

        // Required field check for Name
        if (nameInput.value.trim() === '') {
            displayError(nameError, 'Name is required.');
            isValid = false;
        } else {
            clearError(nameError);
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            displayError(emailError, 'Email is required.');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            displayError(emailError, 'Invalid email format.');
            isValid = false;
        } else {
            clearError(emailError);
        }

        // Password rules
        if (passwordInput.value.trim() === '') {
            displayError(passwordError, 'Password is required.');
            isValid = false;
        } else if (passwordInput.value.length < 8) {
            displayError(passwordError, 'Password must be at least 8 characters long.');
            isValid = false;
        } else {
            clearError(passwordError);
        }

        if (isValid) {
            formMessage.textContent = 'Form submitted successfully! ✅';
            formMessage.className = 'success-message';
            myForm.reset(); // Clear the form
        } else {
            formMessage.textContent = '';
            formMessage.className = '';
        }

        return isValid;
    }

    // Real-time feedback while typing (Bonus)
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() === '') {
            displayError(nameError, 'Name is required.');
        } else {
            clearError(nameError);
        }
    });

    emailInput.addEventListener('input', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            displayError(emailError, 'Email is required.');
        } else if (!emailRegex.test(emailInput.value)) {
            displayError(emailError, 'Invalid email format.');
        } else {
            clearError(emailError);
        }
    });

    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.trim() === '') {
            displayError(passwordError, 'Password is required.');
        } else if (passwordInput.value.length < 8) {
            displayError(passwordError, 'Password must be at least 8 characters long.');
        } else {
            clearError(passwordError);
        }
    });

    function displayError(element, message) {
        element.textContent = message;
    }

    function clearError(element) {
        element.textContent = '';
    }
});