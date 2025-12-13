import { cambiarTema, irALogin, page } from './utils/funciones-variables.js';
const btnTema = document.getElementById('btn-tema');
const btnAdministrador = document.getElementById('btn-administrador');
const btnProductos = document.getElementById('btn-productos');
const btnCarrito = document.getElementById('btn-carrito');
const btnSalir = document.getElementById('btn-salir');
const btnFaroles = document.getElementById('btn-faroles');
const btnPlafones = document.getElementById('btn-plafones');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Primera carga
page.render();

btnTema.onclick = cambiarTema;

btnAdministrador.onclick = () => {
  irALogin('productos.html');
};

btnProductos.onclick = () => {
  location.reload();
};

btnCarrito.onclick = () => {
  location.assign('./carrito.html');
};

btnSalir.onclick = () => {
  localStorage.removeItem('cliente');
  localStorage.removeItem('productos');
  location.replace('./bienvenida.html');
};

btnFaroles.onclick = () => {
  page.setCategory('Farol');
};

btnPlafones.onclick = () => {
  page.setCategory('Plafon');
};

// Controles
nextBtn.onclick = page.next;
prevBtn.onclick = page.prev;
