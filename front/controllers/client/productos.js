import { categoriaA, categoriaB, mostrarProductos } from './funciones-variables.js';
const btnTema = document.getElementById("btn-tema");
const btnFaroles = document.getElementById("btn-faroles");
const btnPlafones = document.getElementById("btn-plafones");
const btnPaginaAnterior = document.getElementById("btn-pagina-anterior");
const btnPaginaSiguiente = document.getElementById("btn-pagina-siguiente");



btnFaroles.addEventListener("click", () => {
  mostrarProductos(categoriaA);
});

btnPlafones.addEventListener("click", () => {
  mostrarProductos(categoriaB);
});