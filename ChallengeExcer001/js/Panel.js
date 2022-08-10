//Modularizado de clases
const Cliente = require('./classes/Cliente')
const Envase = require('./classes/Envase')
const Recibo = require('./classes/Recibo')

//Bloque declarativo
let arrayDeEnvases = [
    new Envase("Botella", "750 ml", 50, 9, "Vidrio", 68.7),
    new Envase("Lata", "330 ml", 50, 9, "Plastico", 68.7),
    new Envase("Botella", "1000 ml", 50, 9, "Vidrio", 68.7),
];
let id = 0
let pressInicio=true;

//Metodos
function botonInicio() {
    console.log("Proceso iniciado: Ingrese un envase");
    console.log("Escaneando envase...");
    const envase001 = new Envase("Botella", "750 ml", 50, 9, "Plastico", 68.7);
}

function continua(){
let confirm = prompt("Desea continuar ingresando envases? (si/no)");
    if (confirm==="si") {
        console.log("Escaneando envase...");
        pressInicio=true;
    }else{
        console.log("Proceso cancelado, gracias por usar nuestra tecnologia.");
        pressInicio=false;
    }
}

function botonImprimir() {
    console.log("Proceso finalizado, imprimiendo recibo...");
        console.log("Datos del recibo: " + "\n" +
        "Datos del cliente: " + "\n" +
        "ID: " + cliente001.getId()  + "\n" +
        "Nombre: " + cliente001.getNombre() + "\n" +
        "Apellido: " + cliente001.getApellido());

        console.log("Datos del/ de los envase/s: " + "\n");
        for (Envase in arrayDeEnvases) {
            console.log("Tipo: " + arrayDeEnvases[Envase].getTipo() + "\n" 
            + "Capacidad: " + arrayDeEnvases[Envase].getCapacidad() + "\n"
            + "Precio: " + arrayDeEnvases[Envase].getPrecio() + "\n"
            + "Peso: " + arrayDeEnvases[Envase].getPeso() + "\n"
            + "Material: " + arrayDeEnvases[Envase].getMaterial() + "\n"
            + "Peso total: " + arrayDeEnvases[Envase].getPesoTotal() + "\n"
            + "-----------------------------------------------------" + "\n");
            }
    }



//Accion Panel
// const cliente1 = new Cliente();
// id++;
// cliente1.setId(id);
// let nombre = prompt("Ingrese su nombre");
// cliente1.setNombre(nombre);
// let apellido = prompt("Ingrese su apellido");
// cliente1.setApellido(apellido);
// botonInicio();
// arrayDeEnvases.push(envase001);
// while(pressInicio){
//     continua();
//     let envaseAux = new Envase();
//     let tipoElemento = prompt("Ingrese el tipo de elemento");
//     envaseAux.setTipo(tipoElemento);
//     let capacidadElemento = prompt("Ingrese la capacidad del elemento");
//     envaseAux.setCapacidad(capacidadElemento);
//     let cantidad = prompt("Ingrese la cantidad");
//     envaseAux.setCantidad(cantidad);
//     let valor = prompt("Ingrese el valor");
//     envaseAux.setValor(valor);
//     let valorTotal = prompt("Ingrese el valor total");
//     envaseAux.setValorTotal(valorTotal);
//     let totalDiario = prompt("Ingrese el total diario");
//     envaseAux.setTotalDiario(totalDiario);
//     arrayDeEnvases.push(envaseAux);
// }

const cliente1 = new Cliente(0001, "Juan", "Perez");
const recibo1 = new Recibo(cliente1, arrayDeEnvases);

let envaseAux = new Envase();
envaseAux.setTipo("Lata");
envaseAux.setCapacidad("330 ml");
envaseAux.setAlto(34.8);
envaseAux.setDiametro(4.8);
envaseAux.setMaterial("Plastico");
envaseAux.setValorDevolucionXUn(0.5);

let envaseAux2 = new Envase("Botellon", "6000 ml", 500, 90, "Plastico", 68.7);

envaseAux.mostrarDatos();
console.log("-----------------------------------------------------");
envaseAux2.mostrarDatos();
console.log("-----------------------------------------------------");
cliente1.mostrarDatos();
console.log("-----------------------------------------------------");
recibo1.mostrarDatos();

