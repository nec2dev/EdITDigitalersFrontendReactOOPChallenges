const Recibo = class Recibo {
    constructor(tipoElemento, valor, valorTotal, cantidad, totalDiario) {
        this.tipoElemento = tipoElemento;
        this.valor = valor;
        this.valorTotal = valorTotal;
        this.cantidad = cantidad;
        this.totalDiario = totalDiario;
    }
    getTipoElemento() {
        return this.tipoElemento;
    }
    setTipoElemento(tipoElemento) {
        this.tipoElemento = tipoElemento;
    }
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
    getValorTotal() {
        return this.valorTotal;
    }
    setValorTotal(valorTotal) {
        this.valorTotal = valorTotal;
    }
    getcantidad() {
        return this.cantidad;
    }
    setcantidad(cantidad) {
        this.cantidad = cantidad;
    }
    getTotalDiario() {
        return this.totalDiario;
    }
    setTotalDiario(totalDiario) {
        this.totalDiario = totalDiario;
    }
    imprimirRecibo(){
        console.log("Datos del recibo: ");
        console.log("Tipo Elemento: " + this.getTipoElemento());
        console.log("Valor: $ " + this.getValor().toFixed(2));
        console.log("Valor Total: $ " + this.getValorTotal().toFixed(2));
        console.log("Cantidad Cliente: " + this.getcantidad());
        console.log("Total Diario: $ " + this.getTotalDiario().toFixed(2));
    }
}

module.exports = Recibo;