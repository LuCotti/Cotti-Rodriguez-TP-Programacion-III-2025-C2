import { mostrarGuardados } from './funciones-variables.js';
const btnTema = document.getElementById("btn-tema");
const btnFinalizarCompra = document.getElementById("btn-finalizar-compra");

btnFinalizarCompra.onclick = () => {
  window.location.replace("./ticket.html");
}

mostrarGuardados();

// function mostrarGuardados() {
//   eliminarElementos(sectionProductos);
//   const productos = traerGuardados();
//   if (productos.length === 0) {
//     sectionProductos.innerText = "No hay productos en el carrito";
//   } else {
//     sectionProductos.innerText = "";
//     for (let p of productos) {
//       const div = crearCard(p);
//       sectionProductos.appendChild(div);

//       if (estaGuardado(p.id)) {
//         const btnQuitar = document.getElementById(`btn-quitar-${p.id}`);
//         btnQuitar.addEventListener("click", () => {
//           quitarProducto(p);
//           window.location.reload();
//         });
//       } else {
//         const btnAgregar = document.getElementById(`btn-agregar-${p.id}`);
//         btnAgregar.addEventListener("click", () => {
//           guardarProducto(p);
//           window.location.reload();
//         });
//       }
//     }
//   }
// }