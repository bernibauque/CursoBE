> [!NOTE]  
>Objetivo  
El objetivo de este trabajo práctico es que los alumnos desarrollen una API RESTful utilizando  
Express.js para la gestión de libros, almacenando los datos en una base de datos con MongoDB y que  
puedan implementar Autenticación y Autorización para garantizar la seguridad de la API.  
La API permitirá realizar operaciones básicas como crear, leer, actualizar y eliminar libros, así como  
obtener una lista de todos los libros disponibles.  

> [!TIP]  
>Consigna 
1. La API debe seguir los principios de arquitectura RESTful y utilizar los métodos HTTP  
adecuados para cada operación.  
2. La API debe implementar las siguientes rutas y funcionalidades:  
a. GET /libros: Devuelve la lista completa de libros.  
b. GET /libros/:id: Devuelve los detalles de un libro específico según su ID.  
c. POST /libros: Crea un nuevo libro con la información proporcionada.  
d. PUT /libros/:id: Actualiza la información de un libro específico según su ID.  
e. DELETE /libros/:id: Elimina un libro específico según su ID.  
3. La API debe utilizar una estructura de archivos y carpetas organizada para separar las rutas y  
los controladores de libros.  
4. La API debe manejar adecuadamente los errores y devolver respuestas JSON apropiadas en  
caso de errores.  
5. Se debe implementar mediante el ORM Mongoose el acceso a una base de datos de libros  
6. Implementar autenticación en la API, validando Token OAuth 2.0 en cada petición HTTP de  
cualquier ruta.  
7. Implementar autorización en la API, validando accesos a las rutas mediante SCOPES, a  
continuación para cada ruta el scope con el que se debe validar:  
a. GET /libros - Scope: read:libros  
b. GET /libros/:id - Scope: read:libros  
c. POST /libros - Scope: write:libros  
d. PUT /libros/:id - Scope: write:libros  