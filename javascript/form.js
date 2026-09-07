// Inicializar EmailJS
emailjs.init({
    publicKey: "q-N8_XtiURovcsoxa"
});


// Obtener formulario
const formulario = document.getElementById("formularioContacto");


// Evento submit
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const enviarBtn = document.getElementById("enviarBtn");

    // Desactivar botón mientras se envía
    enviarBtn.disabled = true;
    enviarBtn.textContent = "Enviando...";


    // Enviar formulario
    emailjs.sendForm(
        "service_ftadd81",
        "template_irf86i8",
        formulario
    )

    .then(function() {

        Swal.fire({
            icon: "success",
            title: "¡Mensaje enviado!",
            text: "Gracias por contactarnos. Te responderemos pronto.",
            confirmButtonColor: "#07598C"
        });

        // Limpiar formulario
        formulario.reset();

    })

    .catch(function(error) {

        console.error("Error:", error);

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No pudimos enviar tu mensaje. Inténtalo nuevamente.",
            confirmButtonColor: "#07598C"
        });

    })

    .finally(function() {

        enviarBtn.disabled = false;
        enviarBtn.textContent = "Enviar";

    });

});