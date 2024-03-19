/* 
Primitivos (imutáveis) São valores copiados  - string, number, boolean, undefined,
null (bigint, symbol) 

Referência (mutável) São passados por referência - array, object, function
*/

// let a = [1, 2, 3];
// let b = a // Referência a variavel
// console.log(a, b)

// a.push(4) // Adicionando no final do array a
// console.log(a, b) // A variavel B é uma referência da A.. não uma cópia

// Caso eu queira copiar e não fazer referência
let a1 = [1, 2, 3];
let b1 = [...a1]; // Copiando o array e não fazendo referência
console.log(a1, b1);
a1.push("Incluindo no final de A sem fazer referência");
console.log(a1, b1);
