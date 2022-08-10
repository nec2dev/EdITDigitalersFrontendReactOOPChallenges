const Envase = require("./Envase");

const Recibo = class Recibo {
    constructor(cliente, arrayDeEnvases) {
        this.cliente = cliente;
        this.arrayDeEnvases = arrayDeEnvases;
    }
    getCliente() {  
        return this.cliente;
    }
    setCliente(cliente) {
        this.cliente = cliente;
    }
    getArrayDeEnvases() {
        return this.arrayDeEnvases;
    }
    setArrayDeEnvases(arrayDeEnvases) {
        this.arrayDeEnvases = arrayDeEnvases;
    }
    mostrarDatos() {
        console.log("Datos del recibo: ");
        this.cliente.mostrarDatos();
        console.log("-----------------------------------------------------");
        console.log("Datos del/ de los envase/s: ");
        for (let i = 0; i < this.arrayDeEnvases.length; i++) {
            this.arrayDeEnvases[i].mostrarDatos();
            console.log("-----------------------------------------------------");
        }
    }
}

module.exports = Recibo;