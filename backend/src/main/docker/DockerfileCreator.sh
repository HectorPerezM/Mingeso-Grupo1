mvn clean package docker:build


database:
    image: mariadb:latest
    environment:
      - MYSQL_ROOT_PASSWORD=p4SSW0rd
      - MYSQL_DATABASE=plataformaactiva
      - MYSQL_USER=username
      - MYSQL_PASSWORD=password
  spring-boot:
    image: calvarezs/mingeso-project
    depends_on:
      - database
    ports:
      - 8787:8082
    environment:
      - DATABASE_HOST=database
      - DATABASE_USER=username
      - DATABASE_PASSWORD=password
      - DATABASE_NAME=plataformaactiva
      - DATABASE_PORT=3306


      docker run -d \
    --name spring-boot-jpa-docker-webapp \
    --link demo-mysql:mariadb \
    -p 8080:8080 \
    -e DATABASE_HOST=database \
    -e DATABASE_USER=username \
    -e DATABASE_PASSWORD=password  \
    -e DATABASE_NAME=plataformaactiva \
    -e DATABASE_PORT=3306 \
    calvarezs/mingeso-project

    docker run -d \
    --name demo-mysql \
    -e MYSQL_ROOT_PASSWORD=p4SSW0rd \
    -e MYSQL_DATABASE=demo \
    -e MYSQL_USER=dbuser \
    -e MYSQL_PASSWORD=dbp4ss \
    mariadb:latest