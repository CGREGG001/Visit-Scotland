# Utilisation de l'image officielle d'NGINX basée sur Alpine pour une image légère
FROM nginx:alpine

# Expose le port 80 pour permettre les connexions HTTP
EXPOSE 80

# Commande pour démarrer Nginx en mode "foreground" (en tâche de fond)
CMD ["nginx", "-g", "daemon off;"]

# docker-compose up --build
