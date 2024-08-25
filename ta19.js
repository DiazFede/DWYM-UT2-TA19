document.getElementById('name').addEventListener('input', function() {
    const name = this.value.trim();
    const nameError = document.getElementById('nameError');
    
    if (name === '') {
        nameError.textContent = 'El nombre es obligatorio';
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
    }
});

document.getElementById('password').addEventListener('input', function() {
    const password = this.value.trim();
    const passwordError = document.getElementById('passwordError');
    
    if (password.length < 8) {
        passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres';
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const email = this.value.trim();
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        emailError.textContent = 'El correo electrónico no es válido';
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
});

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    const nameError = document.getElementById('nameError').style.display;
    const passwordError = document.getElementById('passwordError').style.display;
    const emailError = document.getElementById('emailError').style.display;

    if (nameError === 'block' || passwordError === 'block' || emailError === 'block') {
        e.preventDefault();
    }
});
