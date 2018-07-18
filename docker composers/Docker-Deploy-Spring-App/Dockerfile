FROM alpine/git as clone
MAINTAINER carlos.alvarez.s@usach.cl

ARG url
ARG branch
WORKDIR /app
RUN git init 
RUN git pull ${url} ${branch}

FROM maven:3.5-jdk-8-alpine as build
ARG project_folder
WORKDIR /app
COPY --from=clone /app/${project_folder} /app
RUN mvn install

FROM openjdk:8-jre-alpine
ARG artifactid
ARG version
ENV artifact ${artifactid}-${version}.jar
WORKDIR /app
COPY --from=build /app/target/${artifact} /app
EXPOSE 8082
EXPOSE 3306
ENTRYPOINT ["sh", "-c"]
CMD ["java -jar ${artifact}"]