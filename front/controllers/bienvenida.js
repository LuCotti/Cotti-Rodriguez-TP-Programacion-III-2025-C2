import { obtenerTema, cambiarTema, apiUrl } from "./funciones-variables.js";
const body = document.getElementsByTagName('body')[0];
const btnTema = document.getElementById("btn-tema");
const inputNombre = document.getElementById("input-nombre");
const btnIngresar = document.getElementById("btn-ingresar");
const mensaje = document.getElementById("p-mensaje");
const btnAdministrador = document.getElementById("btn-administrador");

let tema = obtenerTema();
if (tema === 'oscuro') body.classList.add('oscuro');

btnTema.onclick = cambiarTema;
btnIngresar.onclick = ingresar;
btnAdministrador.onclick = irALogin;

async function ingresar() {
  const nombre = inputNombre.value;
  if (nombre.length === 0) {
    mensaje.innerText = "Por favor, ingrese su nombre...";
  } else {
    mensaje.innerText = "";
    localStorage.setItem("cliente", nombre);
    location.replace("./productos.html");
  }
}

async function irALogin() {
  const  response = await fetch(apiUrl + '/administrator')
  location.assign(response.url);
}