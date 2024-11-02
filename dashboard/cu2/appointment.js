document
  .getElementById("appointment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Simulación de éxito en la programación de la cita
    const successMessage = document.getElementById("success-message");
    successMessage.textContent =
      "Su cita ha sido programada exitosamente. Recibirá una confirmación en su correo electrónico.";
  });
