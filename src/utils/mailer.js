const nodemailer = require('nodemailer');
require('dotenv').config();

// Configuración del transporter de Nodemailer
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', // true para puerto 465, false para otros
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

/**
 * Función para estructurar y enviar el correo de contacto
 */
const sendContactEmail = async ({ nombre, email, telefono, asunto, mensaje }) => {
    const mailOptions = {
        from: `"Calendando Web" <${process.env.SMTP_USER}>`,
        replyTo: email, // Permite responder directamente al usuario
        to: process.env.EMAIL_RECEIVER,
        subject: `Nuevo mensaje de contacto: ${asunto}`,
        html: `
            <h2>Nuevo mensaje desde la página web de Calendando</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Correo:</strong> ${email}</p>
            <p><strong>Teléfono / WhatsApp:</strong> ${telefono || 'No proporcionado'}</p>
            <p><strong>Asunto:</strong> ${asunto}</p>
            <br/>
            <p><strong>Mensaje:</strong></p>
            <blockquote style="background: #f4f4f4; padding: 12px; border-left: 4px solid #0284c7; margin: 0;">
                ${mensaje.replace(/\n/g, '<br>')}
            </blockquote>
        `
    };

    return await transporter.sendMail(mailOptions);
};

module.exports = {
    sendContactEmail
};