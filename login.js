document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores del formulario
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Buscar el usuario en localStorage
    const usuario = JSON.parse(localStorage.getItem(email));

    if (usuario && usuario.password === password) {
        // Guardar el usuario como "logueado"
        localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));

        // Redirigir al index
        alert(`¡Bienvenido, ${usuario.nombre}!`);
        window.location.href = "index.html";
    } else {
        alert("Correo o contraseña incorrectos.");
    }
});
