FROM tomcat:9.0.22-jdk13-openjdk-oracle
WORKDIR /usr/local/tomcat/
RUN mkdir webapps/coches
COPY /dist/web-form webapps/coches
EXPOSE 9090
CMD ["catalina.sh","run"]
