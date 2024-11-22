document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const genero = document.getElementById('genero').value;

    const usuario = {
        nombres,
        apellidos,
        correo,
        contraseña,
        genero
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    alert('Registro exitoso, ahora puedes iniciar sesión.');

    window.location.href = 'login.html';
});
