const enAlacena = [""];

const comprar = ["manzanas", "uvas", "leche", "pan"];

const cosasPorComprar = comprar.filter(item => enAlacena.includes(item));

console.log(cosasPorComprar);