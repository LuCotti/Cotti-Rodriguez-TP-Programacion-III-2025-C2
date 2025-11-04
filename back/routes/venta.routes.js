const Venta = require("../models/venta");
const router = require("express").Router();

// Registrar una venta
router.post("/", async (req, res) => {
  try {
    const { nombreCliente, fecha, precioTotal } = req.body;
    const creado = await Venta.create(
      {
        nombreCliente: nombreCliente,
        fecha: fecha,
        precioTotal: precioTotal
      }
    );
    return res.status(201).send(creado);
  } catch (error) {
    if (error instanceof TypeError) {
      return res.status(400).send({ message: "Falta algún parámetro" });
    } else {
      console.log(error);
      return res.status(500).send({ message: "Error interno" });
    }
  }
});

// Traer todas las ventas
router.get("/", async (req, res) => {
  try {
    const resultado = await Venta.findAll();
    return res.status(200).json(resultado);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Error interno" });
  }
});

// Traer una venta por su id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Venta.findByPk(id);
    if (!producto) return res.status(404).send({ message: "Venta no encontrada"});
    return res.status(200).json(producto);
  } catch (error) {
    return res.status(500).send({ message: "Error interno" });
  }
});

module.exports = router;