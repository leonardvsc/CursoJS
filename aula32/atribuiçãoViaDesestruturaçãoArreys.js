let a = "A";
let b = "B";
let c = "C";

[a, b, c] = [1, 2, 3]; // Atribuição via desestruturação
// O que está do lado esquerdo é a desestruturação
// O que está do lado direito é o array
console.log(a, b, c);

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]; // Array
[a, b, c] = numeros; // Atribuição via desestruturação
console.log(a, b, c);

//                                       Rest Operator
//                                       Cria uma variável para receber o restante dos valores
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);

const numerosComplexos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(numerosComplexos[0][2]);
