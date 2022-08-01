const app = document.getElementById('app');
let nombre;
const plantila = Handlebars.compile(
    `<h2>Welcome to Handlebars, my dear {{nombre}}</h2>`);
app.innerHTML = plantila({nombre: 'Maria'});

