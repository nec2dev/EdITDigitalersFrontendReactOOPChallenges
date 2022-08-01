const app = document.getElementById('app');
let nombre;
let envioGratis;
const plantila = Handlebars.compile(
    `{{#each libros}}
    <h2>{{this.nombre}}</h2>
    <h3>{{this.autor}}</h3>
    {{#if this.envioGratis}}
    <span>Envio gratis</span>
    {{else}}
    <span>Este libro no cuenta con envio gratis</span>
    {{/if}}
    {{#unless this.hayStock}}
    <span>Producto sin Stock</span>
    {{/unless}}
    {{/each}}
    `);
    
app.innerHTML = plantila({
    libros: [
        {nombre: 'El Aleph', autor: 'J.L.Borges', envioGratis: true, hayStock: true},
        {nombre: 'Dracula', autor: 'Bram stocker', envioGratis: false, hayStock: true},
        {nombre: 'El alquimista', autor: 'Paulo Cohelo', envioGratis: false, hayStock: false}
    ]
});


