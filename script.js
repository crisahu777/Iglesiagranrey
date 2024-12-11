document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtén los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Crea un nuevo elemento en la lista
    const messageItem = document.createElement("li");
    messageItem.innerHTML = `<strong>${name}</strong> (${email}): ${message}`;

    // Agrega el mensaje a la lista
    document.getElementById("messages-list").appendChild(messageItem);

    // Limpia el formulario
    document.getElementById("contact-form").reset();

    // Muestra una alerta de confirmación
    alert("Mensaje enviado. Gracias por contactarnos.");
});
