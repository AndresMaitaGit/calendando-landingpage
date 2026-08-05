const express = require('express');
const router = express.Router();
const { handleContactForm } = require('../controllers/contactController');

// Ruta para procesar el formulario de contacto
router.post('/contacto', handleContactForm);

module.exports = router;