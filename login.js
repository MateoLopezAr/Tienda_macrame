document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const correo = document.getElementById('login-correo').value;
    const contraseña = document.getElementById('login-contraseña').value;

    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

    if (usuarioGuardado && usuarioGuardado.correo === correo && usuarioGuardado.contraseña === contraseña) {
        alert('Inicio de sesión exitoso.');
        window.location.href = 'index.html';
    } else {
        alert('Correo o contraseña incorrectos.');
    }
});
    