# Docker-Deploy-Spring-App

based on the article "A Dockerfile for Maven-based Github projects", by Nicolas Fränkel
init with the command "docker-compose up --force-recreate --build"

Remember create a .env file with the next elements:
GIT_USER=my-username
GIT_PASSWORD=my-password

For get ip adress for mysql container:
 docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' docker-deploy-spring-app_database_1

 replace docker-deploy-spring-app_database_1 with de respective name for command "docker'ps -a"