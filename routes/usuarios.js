const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Rutas para Usuarios
router.get('/', usuariosController.listarUsuarios);
router.post('/', usuariosController.crearUsuario);
router.get('/:id', usuariosController.obtenerUsuario);
router.put('/:id', usuariosController.actualizarUsuario);
router.delete('/:id', usuariosController.eliminarUsuario);

module.exports = router;
