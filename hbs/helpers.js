const hbs = require('hbs');

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    texto = '';
    palabras.forEach((e, idx) => {
        e = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
        texto += e + (idx !== palabras.length - 1 ? ' ' : '');
    });
    return texto;
});