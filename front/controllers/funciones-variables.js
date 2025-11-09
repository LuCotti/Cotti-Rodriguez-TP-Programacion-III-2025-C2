const apiUrl = 'http://localhost:3000'
const sectionProductos = document.getElementById("section-productos");
const categoriaA = "Farol";
const categoriaB = "Plafon";

const response = await fetch(apiUrl + "/producto");
const productos = await response.json();

function mostrarProductos(categoria) {
  eliminarElementos(sectionProductos);
  if (productos.length === 0) {
    sectionProductos.innerText = "No hay productos en la base de datos";
  } else {
    sectionProductos.innerText = "";
    for (let p of productos) {
      if (p.activo && categoria === p.categoria) {
        const div = crearCard(p);
        sectionProductos.appendChild(div);
  
        if (estaGuardado(p.id)) {
          const btnQuitar = document.getElementById(`btn-quitar-${p.id}`);
          btnQuitar.addEventListener("click", () => {
            quitarProducto(p);
            window.location.reload();
          });
        } else {
          const btnAgregar = document.getElementById(`btn-agregar-${p.id}`);
          btnAgregar.addEventListener("click", () => {
            guardarProducto(p);
            window.location.reload();
          });
        }
      } else {
        continue;
      }
    }
  }
}

function crearCard(producto) {
  const div = document.createElement("div");
  div.id = `div-producto-${producto.id}`;
  div.innerHTML = `
  <img src="${apiUrl}/uploads/${producto.imagen}">
  <p>Producto Nº: ${producto.id}</p>
  <p>Nombre: ${producto.nombre}</p>
  <p>Precio: ${producto.precio}</p>
  ${estaGuardado(producto.id) ? `<button id="btn-quitar-${producto.id}">Quitar del carrito</button>` : `<button id="btn-agregar-${producto.id}">Agregar al carrito</button>`}
  `;
  return div;
}

function eliminarElementos(contenedor) {
  while (contenedor.firstChild) contenedor.removeChild(contenedor.firstChild);
}

function traerGuardados() {
  return JSON.parse(localStorage.getItem("productos")) || [];
}

function guardarProducto(nuevoProducto) {
  let productos = traerGuardados();
  productos.push(nuevoProducto);
  localStorage.setItem("productos", JSON.stringify(productos));
}

function estaGuardado(id) {
  const productos = traerGuardados();
  for (let p of productos) {
    if (id === p.id) return true;
  }
  return false;
}

function quitarProducto(producto) {
  let productos = traerGuardados();
  const index = obtenerPosicion(producto);
  productos.splice(index, 1);
  localStorage.setItem("productos", JSON.stringify(productos));
}

function obtenerPosicion(producto) {
  const productos = traerGuardados();
  let index = 0;
  for (let p of productos) {
    if (p.id === producto.id) break;
    index++;
  }
  return index;
}

export { apiUrl, sectionProductos, categoriaA, categoriaB, productos, mostrarProductos, crearCard, eliminarElementos, traerGuardados, guardarProducto, estaGuardado, quitarProducto, obtenerPosicion };