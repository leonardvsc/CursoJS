let a = "A";
let b = "B";
let c = "C";

[a, b, c] = [1, 2, 3]; // Atribuição via desestruturação
// O que está do lado esquerdo é a desestruturação
// O que está do lado direito é o array
console.log(a, b, c);

const numeros = [100, 200, 300]; // Array
[a, b, c] = numeros; // Atribuição via desestruturação
console.log(a, b, c);
