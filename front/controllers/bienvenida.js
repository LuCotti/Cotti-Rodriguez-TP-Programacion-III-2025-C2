import {
  cambiarTema,
  irAProductos,
  irALogin,
} from './utils/funciones-variables.js';
const btnTema = document.getElementById('btn-tema');
const btnIngresar = document.getElementById('btn-ingresar');
const inputNombre = document.getElementById('input-nombre');
const mensajeElement = document.getElementById('p-mensaje');
const btnAdministrador = document.getElementById('btn-administrador');

btnTema.addEventListener('click', () => {
  cambiarTema();
});

btnIngresar.addEventListener('click', () => {
  irAProductos(inputNombre, mensajeElement);
});

btnAdministrador.addEventListener('click', () => {
  irALogin('bienvenida.html');
});
