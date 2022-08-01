const Cliente = class Cliente {
    constructor(id, nombre, apellido) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellido() {
        return this.apellido;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    mostrarDatos(){
        console.log("Datos del cliente: ");
        console.log("ID: " + this.getId());
        console.log("Nombre: " + this.getNombre());
        console.log("Apellido: " + this.getApellido());
    }
    botonInicio() {
        console.log("Boton Inicio");
    }
}
module.exports = Cliente;