import { cambiarTema, agregarProducto } from './utils/funciones-variables.js';
const btnTema = document.getElementById('btn-tema');
const btnCancelar = document.getElementById('btn-cancelar');
const formAgregar = document.getElementById('form-agregar');
const params = new URLSearchParams(location.search);
const view = params.get('view');

btnTema.onclick = cambiarTema;

btnCancelar.onclick = () => {
  location.replace(`/administrator/dashboard?view=${view}`);
};

formAgregar.addEventListener('submit', (e) => {
  e.preventDefault();
  agregarProducto(formAgregar);
});

const inputFile = document.getElementById('imagen');
const fileName = document.getElementById('file-name');

inputFile.addEventListener('change', () => {
  fileName.textContent =
    inputFile.files.length > 0
      ? inputFile.files[0].name
      : 'No se ha seleccionado ningún archivo';
});
