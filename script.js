const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const error = document.getElementById("error");

    error.textContent = "";

    // VALIDACIONES
    if (nombre === "" || email === "" || mensaje === "") {
        error.textContent = "Todos los campos son obligatorios.";
        return;
    }

    if (!email.includes("@")) {
        error.textContent = "El email no es válido.";
        return;
    }

    // SI TODO ESTÁ BIEN
    alert("Formulario enviado correctamente 🎉");
    formulario.reset();
});