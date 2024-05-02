// Filter e map vão retorna sempre um novo array, sem alterar o array original

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Filtrando os numeros maior que 10
const numerosMaiorQue10 = numeros.filter((valor) => valor > 10);
console.log(numerosMaiorQue10);
