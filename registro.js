document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault(); 


    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const genero = document.getElementById("genero").value;

    const usuario = {
        nombre,
        apellido,
        email,
        password,
        genero,
    };

  
    localStorage.setItem(email, JSON.stringify(usuario));

    alert("Registro exitoso. Por favor, inicia sesión.");
    window.location.href = "login.html";
});
