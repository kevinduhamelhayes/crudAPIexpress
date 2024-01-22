const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/', productosController.listarProductos);
router.post('/', productosController.crearProducto);
router.get('/:id', productosController.obtenerProducto); // Implementar en controlador
router.put('/:id', productosController.actualizarProducto); // Implementar en controlador
router.delete('/:id', productosController.eliminarProducto); // Implementar en controlador

module.exports = router;
