const Producto = require("../models/producto.js");
const router = require("express").Router();

router.post("/", async(req, res) => {
    try{
        const { nombre, precio, imagen, categoria, activo } = req.body;

        //todo: validar que vengan todos los datos.

        const resultado = await Producto.create({
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            categoria: categoria,
            activo: activo
        });
        return res.status(201).json(resultado);
    }
    catch(error){
        if( error instanceof TypeError ){
            res.status(400).send({ message: "Falta algun parametro" })
        }
        else{
            console.log(error);
            res.status(500).send({ message: "Error interno" })
        }
    }
});

router.get("/", async(req, res) => {
    
});

module.exports = router;