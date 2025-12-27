import {
  cambiarTema,
  mostrarProductos,
  categoriaA,
  categoriaB,
} from './utils/funciones-variables.js';
const btnTema = document.getElementById('btn-tema');
const btnAgregarProducto = document.getElementById('btn-agregar-producto');
const btnCerrarSesion = document.getElementById('btn-cerrar-sesion');
const btnFaroles = document.getElementById('btn-faroles');
const btnPlafones = document.getElementById('btn-plafones');
const sectionProductos = document.getElementById('section-productos');
const params = new URLSearchParams(location.search);
const view = params.get('view');

btnTema.addEventListener('click', () => {
  cambiarTema();
});

btnAgregarProducto.addEventListener('click', () => {
  location.href = `/producto/alta?view=${view}`;
});

btnCerrarSesion.addEventListener('click', () => {
  location.href = `/administrator?view=${view}`;
});

btnFaroles.addEventListener('click', async () => {
  await mostrarProductos(categoriaA, sectionProductos);
});

btnPlafones.addEventListener('click', async () => {
  await mostrarProductos(categoriaB, sectionProductos);
});
