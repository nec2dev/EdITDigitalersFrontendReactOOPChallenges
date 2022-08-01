/* const persona1 = {
    nombre: 'Homero',
    edad: 39,
    calle: 'Av. Siempreviva 742'
}

const persona2 = {
    nombre: 'Marge',
    edad: 37,
    calle: 'Av. Siempreviva 742'
}

console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.calle);

console.log(persona2.nombre);
console.log(persona2["edad"]);
console.log(persona2["calle"]);

persona2.edad = 36;
console.log(persona2["edad"]);

function Persona() {
}
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function () { console.log("HOLA SOY " + this.nombre) }
}
const persona3 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona4 = new Persona("Marge", 36, "Av. Siempreviva 742");
console.log(persona3.nombre);
console.log(persona3.edad);
console.log(persona3.calle);
console.log(persona4.nombre);
console.log(persona4["edad"]);
console.log(persona4["calle"]);
persona3.hablar(); */


// const persona5 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" };
//devuelve true porque la clave "nombre" existe en el objeto persona1
// console.log("nombre" in persona5);
//devuelve false porque la clave "origen" no existe en el objeto persona1
// console.log("origen" in persona5);
//recorremos todas las propiedades del objeto con el ciclo for...in
/* for (const i in persona5) {
    console.log(persona5[i]);
} */

class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    hablar() {
        console.log("HOLA SOY " + this.nombre);
    }
}
const persona6 = new Persona("Bart", 13, "Av. Siempreviva 742");
for (const i in persona6) {
    console.log(persona6[i]);
}
persona6.hablar();

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("arroz","125");
const producto2 = new Producto("fideo ","50");
console.log(producto1.precio);
console.log(producto2.precio);
producto1.sumaIva();
producto2.sumaIva();
console.log(producto1.precio);
console.log(producto2.precio);
producto1.vender();
