// Este archivo se puede utilizar para agregar interactividad futura,
// como carga dinámica del historial médico o validaciones.

const errorMessage = document.getElementById("error-message");

// Simulación de una condición donde no hay historial médico
const hasMedicalHistory = true; // Cambiar a false para simular sin historial

if (!hasMedicalHistory) {
  errorMessage.textContent = "No existen registros previos para este paciente.";
}
