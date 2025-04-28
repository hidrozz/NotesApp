export const customValidationHandler = (event) => {
  event.target.setCustomValidity('');

  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity('Wajib diisi');
  }
  if (event.target.validity.tooShort) {
    event.target.setCustomValidity('Minimal 6 karakter');
  }
  if (event.target.validity.patternMismatch) {
    event.target.setCustomValidity(
      'Tidak boleh diawali simbol atau karakter ambigu'
    );
  }

  const connectedValidationId = event.target.getAttribute('aria-describedby');
  const connectedValidationEl = connectedValidationId
    ? document.getElementById(connectedValidationId)
    : null;

  if (connectedValidationEl) {
    connectedValidationEl.innerText = event.target.validationMessage;
  }
};
