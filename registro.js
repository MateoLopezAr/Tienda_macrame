document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const genero = document.getElementById('genero').value;

    const usuario = {
        nombres,
        apellidos,
        email,
        password,
        genero
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
    window.location.href = 'login.html';
});
