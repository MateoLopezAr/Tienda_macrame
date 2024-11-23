document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
    const usuarioNombreDiv = document.getElementById("usuarioNombre");
    const navOpciones = document.querySelector('nav ul');

    if (usuarioLogueado) {
        usuarioNombreDiv.textContent = `Hola, ${usuarioLogueado.nombre}`;
        navOpciones.innerHTML = `
            <li><a href="#">Inicio</a></li>
            <li><a href="#us">Sobre Nosotros</a></li>
            <li><a href="productos.html">Productos</a></li>
            <li><a href="#res">Reseñas</a></li>
            <li id="cerrarSesion"><a href="#">Cerrar Sesión</a></li>
        `;

        const cerrarSesionBtn = document.getElementById('cerrarSesion');
        cerrarSesionBtn.addEventListener('click', function () {
            localStorage.removeItem("usuarioLogueado");
            location.reload();
            alert("Sesión cerrada correctamente")
        });
    } else {
        usuarioNombreDiv.innerHTML = `<a href="login.html">Iniciar Sesión</a>`;
    }
});
