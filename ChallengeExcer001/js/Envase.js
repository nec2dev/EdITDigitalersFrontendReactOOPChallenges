const Envase = class Envase {
    constructor(tipo, capacidad, alto, diametro, material, valorDevolucionXUn) {
        this.tipo = tipo;
        this.capacidad = capacidad;
        this.alto = alto;
        this.diametro = diametro;
        this.material = material;
        this.valorDevolucionXUn = valorDevolucionXUn;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getCapacidad() {
        return this.capacidad;
    }
    setCapacidad(capacidad) {
        this.capacidad = capacidad;
    }   
    getAlto() {
        return this.alto;
    }
    setAlto(alto) {
        this.alto = alto;
    }
    getDiametro() {
        return this.diametro;
    }
    setDiametro(diametro) {
        this.diametro = diametro;
    }
    getMaterial() {
        return this.material;
    }
    setMaterial(material) {
        this.material = material;
    }   
    getValorDevolucionXUn() {
        return this.valorDevolucionXUn;
    }   
    setValorDevolucionXUn(valorDevolucionXUn) {
        this.valorDevolucionXUn = valorDevolucionXUn;
    }
    mostrarDatos(){
        console.log("Datos del envase: ");
        console.log("Tipo: " + this.getTipo());
        console.log("Capacidad: " + this.getCapacidad());
        console.log("Alto: " + this.getAlto());
        console.log("Diametro: " + this.getDiametro());
        console.log("Material: " + this.getMaterial());
        console.log("Valor Devolución X Un: $ " + this.valorDevolucionXUn.toFixed(2));
    }

}

module.exports = Envase;

