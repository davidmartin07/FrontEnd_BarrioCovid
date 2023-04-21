# FrontEnd_BarrioCovid
Repositorio en el que se alojara el codigo del backend y el frontend de nuestra aplicación.


## Para arrancarlo: 

#### 1. Arrancar el BackEnd.
Desde el fichero src/main/java/.../h2setup/repository/H2SetupApplication.java clicar en Run 	(para esto es necesaria la extension Spring Boot Dashboard e instalar lo que te dice la 	extensión).

#### 2. Acceder a localhost:8080/h2 en un navegador. 

#### 3. En JDBC URL hay un input para rellenar, en el hay que introducir lo que pone en el fichero src/main/java/.../h2setup/resoucres/application.propieties, mas concretamente el valor que se le da a spring.datasource.url ( en nuestro caso jdbc:h2:mem:memDb), linea 9.

#### 4. Connect y ya estás dentro. Clicando una tabla (por ejemplo COMPRADORES) y dándole a Run, podremos verla completa.


#### 5. Arrancar el FrontEnd.
Abres el terminal en la carpeta frontendisst y desde ahí lanzas los siguientes comandos:
	- npm install  <- Te instalará el directorio node_modules con todo lo necesario
	- npm start    <- Arranca el front en el localhost:3000
