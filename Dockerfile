# Usa una versión oficial y ligera de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia package.json y package-lock.json para aprovechar el caché de capas de Docker
COPY package*.json ./

# Instala solo las dependencias de producción
RUN npm ci --only=production

# Copia el resto del código del proyecto (carpeta public/, src/, server.js, etc.)
COPY . .

# Expone el puerto 3000 interno que usa tu server.js
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "server.js"]