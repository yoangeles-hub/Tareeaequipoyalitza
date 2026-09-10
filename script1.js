// Contraseña requerida para acceder
const CLAVE_CORRECTA = "andre26";

// EVENTO 1: Conmutar el menú responsivo en móviles
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// EVENTO 2: Validación por contraseña de texto
function validarReserva(event) {
  event.preventDefault();

  let personas = parseInt(document.getElementById("personas").value);
  let claveIngresada = document.getElementById("claveMembresia").value;

  // Validación de número de personas
  if (personas < 1 || personas > 10 || isNaN(personas)) {
    alert("Seleccione entre 1 y 10 personas.");
    return false;
  }

  // Validación de la contraseña de membresía
  if (claveIngresada === CLAVE_CORRECTA) {
    alert("reserva valida");
    document.getElementById("formReserva").reset();
    return true;
  } else {
    alert("reserva invalida");
    return false;
  }
}

// EVENTO 3: Cambia texto y estilo del botón al pasar el cursor
function cambiarTextoBoton(estaEncima) {
  let btn = document.getElementById("btnReservar");
  if (estaEncima) {
    btn.textContent = "¡Haz clic para Confirmar!";
    btn.style.backgroundColor = "#083c3d";
  } else {
    btn.textContent = "Confirmar reserva";
    btn.style.backgroundColor = "#0e5a5b";
  }
}