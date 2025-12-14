import { cambiarTema, modificarProducto } from './utils/funciones-variables.js';
const btnTema = document.getElementById('btn-tema');
const btnCancelar = document.getElementById('btn-cancelar');
const formModificar = document.getElementById('form-modificar');
const params = new URLSearchParams(location.search);
const view = params.get('view');

btnTema.onclick = cambiarTema;

btnCancelar.onclick = () => {
  location.assign(`/administrator/dashboard?view=${view}`);
};

formModificar.addEventListener('submit', (e) => {
  e.preventDefault();
  modificarProducto(formModificar);
});
