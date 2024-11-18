document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario && usuario.email === email && usuario.password === password) {
        window.location.href = 'index.html';
    } else {
        alert('Correo o contraseña incorrectos.');
    }
});
