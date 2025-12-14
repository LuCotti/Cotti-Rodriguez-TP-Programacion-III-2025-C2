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

btnTema.onclick = cambiarTema;

btnAgregarProducto.onclick = () => {
  location.assign(`/producto/alta?view=${view}`);
};

btnCerrarSesion.onclick = () => {
  location.replace(`/administrator?view=${view}`);
};

btnFaroles.onclick = () => {
  mostrarProductos(categoriaA, sectionProductos);
};

btnPlafones.onclick = () => {
  mostrarProductos(categoriaB, sectionProductos);
};
