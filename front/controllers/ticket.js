import { apiUrl, traerGuardados } from './funciones-variables.js';

const btnTema = document.getElementById("btn-tema");
const clienteElement = document.getElementById("cliente");
const fechaElement = document.getElementById("fecha");
const empresaElement = document.getElementById("empresa");
const sectionTicket = document.getElementById("section-ticket");
const tableBody = document.getElementById("table-body");
const precioTotalElement = document.getElementById("precio-total");
const btnDescargar = document.getElementById("btn-descargar");
const btnSalir = document.getElementById("btn-salir");
const productosCarrito = traerGuardados();
const nombreCliente = localStorage.getItem("cliente");
let precioTotal = 0;

clienteElement.innerText = `Cliente: ${nombreCliente}`;
fechaElement.innerText = `Fecha: ${new Date().toLocaleString()}`;
empresaElement.innerText = `Empresa: Bichito de Luz`;
mostrarProductos();

btnSalir.onclick = async () => {
  const body = {
    nombreCliente: nombreCliente,
    fecha: new Date(),
    precioTotal: precioTotal
  };
  const ventaRegistrada = await fetch(`${apiUrl}/venta`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  if (ventaRegistrada.ok) {
    localStorage.clear();
    location.replace("./bienvenida.html");
  } else {
    console.log("Error al registrar la venta");
  }
}

function mostrarProductos() {
  let total = 0;
  for (let p of productosCarrito) {
    const tr = crearCard(p);
    tableBody.appendChild(tr);
    total += Number.parseInt(document.getElementById(`total-${p.id}`).innerText);
  }
  precioTotal = total;
  precioTotalElement.innerText = `$ ${total}`;
}

function crearCard(producto) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${producto.cantidad}</td>
  <td>${producto.nombre}</td>
  <td>${producto.precio}</td>
  <td id="total-${producto.id}">${producto.cantidad * producto.precio}</td>
  `;
  return tr;
}