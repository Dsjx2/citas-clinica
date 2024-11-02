const cancelButtons = document.querySelectorAll(".cancel-button");
const modal = document.getElementById("confirmation-modal");
const closeModalButton = document.getElementById("close-modal");
const confirmCancelButton = document.getElementById("confirm-cancel");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");

let appointmentIdToCancel;

cancelButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const appointmentId = this.getAttribute("data-appointment-id");
    const appointmentStatus = this.closest("tr").cells[4].innerText;

    if (appointmentStatus === "Pasada") {
      errorMessage.textContent = "No puede cancelar una cita que ya ha pasado.";
      return;
    }

    appointmentIdToCancel = appointmentId;
    modal.style.display = "block";
  });
});

closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

confirmCancelButton.addEventListener("click", function () {
  // Simulación de cancelación de cita
  const row = document
    .querySelector(`button[data-appointment-id="${appointmentIdToCancel}"]`)
    .closest("tr");
  row.remove(); // Eliminar la fila de la tabla
  successMessage.textContent = "Su cita ha sido cancelada exitosamente.";
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
