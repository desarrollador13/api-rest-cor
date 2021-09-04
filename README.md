Documento creación de servicios Rest Nodejs

Documentacion Completa en el archivo Documentación de pruebas creación de api rest.docx
donde se muestra todo el proceso de la ejecucion.

Arquitectura MVC (Modelo Vista Controlador);
Lenguajes Nodejs, Javascript, Jest.io, Docker.


Index.js = se crea el servidor.
All = se exportan los modulos.
Router = rutas de los servicios.
Controller = capa de enrutamiento de la capa de negocio y las rutas.
Business = Capa de negocio manejos de datos.
Jest.config = configuración de pruebas unitarias.
Dockerfile = archivo descarga imágenes y configura el proyecto.
unitTest = archivo de prueba unitarias.

Funcionamiento de pruebas unitarias en el package.json se ejecuta un script  npm run test
. npm run test

Funcionamiento de script para consumir los servicios el siguiente script  npm run start
. npm run start

Para ejecutar el api en un contenedor en docker.
Ejecutamos el siguiente comando  -f el archivo con las configuraciones en docker  -t el nombre de la imagen  docker build -f Dockerfile -t api-prueba .
. docker build –f Dockerfile -t api-prueba .

Para crear el contenedor que ejecuta nuestra api.
Ejecutamos el siguiente comando  docker run --name api-prueba -p 3001:3001 api-prueba
. docker run –name api-prueba -p 3001:3001 api-prueba


Pruebas de los servicios de la api :
POST
localhost:3001/autenticacion
{
    "usuario" : "admin",
    "contrasena" : "Admin19*" 
}
