# Landing page estático servido con nginx
FROM nginx:alpine

# Copia los archivos del sitio (html, js, uploads, etc.)
COPY . /usr/share/nginx/html/

# El archivo principal tiene un nombre no estándar (.dc.html con espacios),
# lo copiamos como index.html para que nginx lo sirva por defecto.
RUN cp "/usr/share/nginx/html/index.html" /usr/share/nginx/html/index.html

# Config de nginx para escuchar en el puerto 3005
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3005

CMD ["nginx", "-g", "daemon off;"]
