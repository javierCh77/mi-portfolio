# mi-portfolio/Dockerfile

# Etapa de construcción
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias (incluyendo devDependencies necesarias para el build)
RUN npm install --force

# Copiar el resto del código fuente
COPY . .

# Construir el proyecto
RUN npm run build

# Etapa de producción
FROM node:18-alpine

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar solo las dependencias de producción
RUN npm install --only=production

# Copiar los archivos construidos desde la etapa de construcción
COPY --from=builder /app/.next ./.next
# Si no tienes la carpeta public, elimina o comenta esta línea
# COPY --from=builder /app/public ./public

# Establecer variables de entorno necesarias
ENV NODE_ENV=production
ENV PORT=4000  

# Exponer el puerto que usa Next.js (4000)
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
