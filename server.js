const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const apiRoutes = require('./src/routes/api');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public'), {
    extensions: ['html']
}));

// Definir rutas de la API
app.use('/api', apiRoutes);

// Servir la página principal por defecto
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});