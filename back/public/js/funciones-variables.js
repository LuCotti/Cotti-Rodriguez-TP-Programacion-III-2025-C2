const frontUrl = "http://localhost:5500"; // Según el puerto de Live Server
const apiUrl = "http://localhost:3000"; // Según el puerto de index.js
const body = document.getElementsByTagName('body')[0];

function obtenerTema() {
  return localStorage.getItem('tema');
}

function cambiarTema() {
  let tema = localStorage.getItem('tema');
  if (tema === null || tema === 'claro') {
    localStorage.setItem('tema', 'oscuro');
    body.classList.add('oscuro');
  } else if (tema === 'oscuro') {
    localStorage.setItem('tema', 'claro');
    body.classList.remove('oscuro');
  } else {
    console.log('Algo salió mal');
  }
}

export { frontUrl, apiUrl, obtenerTema, cambiarTema };