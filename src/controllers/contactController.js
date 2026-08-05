const { sendContactEmail } = require('../utils/mailer');

/**
 * Controlador para la ruta POST /api/contacto
 */
const handleContactForm = async (req, res) => {
    const { nombre, email, telefono, asunto, mensaje } = req.body;

    // Validar campos obligatorios
    if (!nombre || !email || !asunto || !mensaje) {
        return res.status(400).json({ 
            error: 'Por favor completa todos los campos obligatorios.' 
        });
    }

    try {
        await sendContactEmail({ nombre, email, telefono, asunto, mensaje });
        return res.status(200).json({ 
            message: 'Correo enviado correctamente' 
        });
    } catch (error) {
        console.error('Error al enviar correo:', error);
        return res.status(500).json({ 
            error: error.message || 'Hubo un error al procesar la solicitud de contacto' 
        });
    }
};

module.exports = {
    handleContactForm
};