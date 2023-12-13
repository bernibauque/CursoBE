const express = require('express');
const app = express();
app.use(express.json());

//Importamos el Router de Libros
const libroRouter = require('./routes/libros');

//Importamos el Middleware Error Handler
const errorHandler = require('./middlewares/errorHandler');

app.use('/libros', libroRouter);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});