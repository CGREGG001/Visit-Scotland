# Utilisation de l'image officielle d'nginx basée sur la version stable 1.26.3-alpine (une image légère)
FROM nginx:1.26.3-alpine

# Expose le port 80 pour permettre les connexions HTTP
EXPOSE 80

# Commande pour démarrer Nginx en mode "foreground" (en tâche de fond)
# CMD ["nginx", "-g", "daemon off;"] # c’est déjà le CMD par défaut dans l’image officielle nginx:alpine.
# on peut l’enlever pour garder un Dockerfile plus propre.

# affichage des logs dans le terminal
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log//nginx/error.log
