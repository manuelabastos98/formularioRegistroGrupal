function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

// ==== Validaciones de Registro ====
// Requisitos:
// - Ningún campo puede estar vacío
// - La contraseña debe tener al menos 6 caracteres
// - Las contraseñas deben coincidir
// - Debe estar marcado el checkbox de Términos
//
// En éxito -> showAlertSuccess()
// En error  -> showAlertError()

function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}
function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}
function hideAlerts() {
  document.getElementById("alert-success")?.classList.remove("show");
  document.getElementById("alert-danger")?.classList.remove("show");
}

function validarFormulario(e) {
  if (e && typeof e.preventDefault === "function") e.preventDefault();
  hideAlerts();

  const nombre = document.getElementById("nombre")?.value?.trim() ?? "";
  const apellido = document.getElementById("apellido")?.value?.trim() ?? "";
  const email = document.getElementById("email")?.value?.trim() ?? "";
  const password = document.getElementById("password1")?.value ?? "";
  const password2 = document.getElementById("password2")?.value ?? "";
  const terminos = !!document.getElementById("terminos")?.checked;

  // 1) Ningún campo vacío
  if (!nombre || !apellido || !email || !password || !password2) {
    showAlertError();
    return false;
  }

  // 2) Longitud de contraseña
  if (password.length < 6) {
    showAlertError();
    return false;
  }

  // 3) Contraseñas iguales
  if (password !== password2) {
    showAlertError();
    return false;
  }

  // 4) Aceptar términos
  if (!terminos) {
    showAlertError();
    return false;
  }

  // Si llega aquí, todo OK
  showAlertSuccess();
  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  // Intentamos enganchar el <form>. Si no existe, caemos a un botón de envío.
  const form = document.getElementById("registroForm") || document.querySelector("form");
  if (form) {
    form.addEventListener("submit", validarFormulario);
  } else {
    // Fallback por si el HTML no usa <form> y solo hay botón
    const btn = document.getElementById("btn-registrar") || document.querySelector('button[type="submit"]') || document.querySelector("button");
    if (btn) btn.addEventListener("click", validarFormulario);
  }
});
