// Este archivo se puede utilizar para agregar interactividad futura,
// como la lógica para reenviar recordatorios.

const resendButton = document.getElementById("resend-button");
const errorMessage = document.getElementById("error-message");

// Simulación de reenvío de recordatorio
resendButton.addEventListener("click", function () {
  alert("Recordatorio reenviado a Carlos Martínez.");
});

// Simulación de una condición donde no hay citas programadas
const hasAppointments = false; // Cambiar a true para simular citas

if (!hasAppointments) {
  errorMessage.textContent = "No hay citas programadas para mañana.";
}
