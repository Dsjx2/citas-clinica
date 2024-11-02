document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener valores de los campos
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validaciones
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const successMessage = document.getElementById("success-message");

    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    // Verificar si el correo ya está registrado (simulación)
    if (email === "test@example.com") {
      emailError.textContent =
        "El correo ingresado ya está en uso. Intente con otro.";
      return;
    }

    // Verificar si las contraseñas coinciden
    if (password !== confirmPassword) {
      passwordError.textContent =
        "Las contraseñas no coinciden. Inténtelo de nuevo.";
      return;
    }

    // Si todo es correcto, simular el registro exitoso
    successMessage.textContent =
      "Registro exitoso. Por favor, verifica tu correo electrónico para activar tu cuenta.";
  });
