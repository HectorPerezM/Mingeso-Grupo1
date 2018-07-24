FROM alpine/git as clone
MAINTAINER carlos.alvarez.s@usach.cl

ARG URL
ARG BRANCH
WORKDIR /app 
RUN git init 
RUN git pull ${URL} ${BRANCH}

FROM maven:3.5-jdk-8-alpine as build
ARG PROJECT_FOLDER
WORKDIR /app
COPY --from=clone /app/${PROJECT_FOLDER} /app
RUN mvn -T 1C install

FROM openjdk:8-jre-alpine
ARG ARTIFACT_ID
ARG VERSION
ENV ARTIFACT ${ARTIFACT_ID}-${VERSION}.jar
WORKDIR /app 
COPY --from=build /app/target/${ARTIFACT} /app
EXPOSE 8082
ENTRYPOINT ["sh", "-c"]
CMD ["java -jar ${ARTIFACT}"]   