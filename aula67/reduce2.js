const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulator, valor) => {
  if (valor % 2 !== 0) acumulator.push(valor);
  return acumulator;
}, []);

console.log(total);
