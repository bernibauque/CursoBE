> [!NOTE]
> Objetivo  
El objetivo de este trabajo práctico es que los alumnos desarrollen una API RESTful utilizando  
Express.js para la gestión de libros. La API permitirá realizar operaciones básicas como crear, leer,  
actualizar y eliminar libros, así como obtener una lista de todos los libros disponibles.

> [!TIP]
> Consigna  
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
5. Se debe implementar un archivo data.js que simule una base de datos y contenga una lista  
inicial de libros.  
