const btnTema = document.getElementById("btn-tema");
const sectionProductos = document.getElementById("section-productos");
const btnFinalizarCompra = document.getElementById("btn-finalizar-compra");

btnFinalizarCompra.onclick = () => {
  console.log("Click!");
  window.location.replace("./ticket.html");
}