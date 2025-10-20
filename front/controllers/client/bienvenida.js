const btnTema = document.getElementById("btn-tema");
const inputNombre = document.getElementById("input-nombre");
const btnIngresar = document.getElementById("btn-ingresar");
const mensaje = document.getElementById("p-mensaje");
const btnAdministrador = document.getElementById("btn-administrador");

btnIngresar.onclick = ingresar;
btnAdministrador.onclick = () => {
  window.location.replace("../administrator/login.html");
}

function ingresar() {
  const nombre = inputNombre.value;
  if (nombre.length === 0) {
    mensaje.innerText = "Por favor, ingrese su nombre...";
  } else {
    mensaje.innerText = "";
    window.location.replace("./productos.html");
  }
}