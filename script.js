// Usuario y contraseña simulados
const validUser = {
    username: "admin",
    password: "1234"
};

// Manejar el evento de envío del formulario
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores ingresados
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar las credenciales
    if (username === validUser.username && password === validUser.password) {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerText = "¡Bienvenido!";
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerText = "Usuario o contraseña incorrectos.";
    }
});
