const readline = require('readline-sync');
const { generarNumeroAleatorio, verificarAdivinanza } = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    const input = readline.question('Ingrese un numero: ');
    return parseInt(input); // Convertir la entrada a un número entero
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('Bienvenido a Adivina el numero secreto!')
    console.log('Intenta adivinar el numero del 1 al 100.\n');

    while (true) {
        numeroAdivinado = obtenerNumeroUsuario();
        if (numeroAdivinado === numeroSecreto) {
            verificarAdivinanza(numeroSecreto, numeroAdivinado);
            break;
        } else {
            verificarAdivinanza(numeroSecreto, numeroAdivinado);
        }
    }    
};

juegoAdivinanza();

//Modifique el codigo original porque no llegaba nunca al numero adivinado, asi que agregue el input
//y arregle el while