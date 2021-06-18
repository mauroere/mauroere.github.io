const espera = ms => new Promise(resolve => setTimeout(resolve, 3000));

espera().then(() => console.log(4));

Promise.resuelve().then(() => console.log(2)).then(() => console.log(3));
console.log(1)