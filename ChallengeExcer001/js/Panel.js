
const Cliente = require('./Cliente')
const Envase = require('./Envase')
const Recibo = require('./Recibo')

const cliente001 = new Cliente(1, "Juan", "Perez");
cliente001.botonInicio();
const envase001 = new Envase("Botella", "750 ml", 50, 9, "Plastico", 68.7);
envase001.mostrarDatos();
const envase002 = new Envase("Lata", "750 ml", 50, 9, "Plastico", 68.7);
envase002.mostrarDatos();
const envase003 = new Envase("Botella", "750 ml", 50, 9, "Plastico", 68.7);
envase003.mostrarDatos();
const recibo001 = new Recibo(envase001.getTipo(), 68.7, 68.7, 1, 68.7);
recibo001.imprimirRecibo();


