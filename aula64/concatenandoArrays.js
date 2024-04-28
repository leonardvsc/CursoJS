// Concatenando Arrays
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Rest_parameters

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

// Concatenando com o spread operator
// Cria uma variavel com um array e espalha os valores de um array em outro

//const a3 = [...a1, ...a2];

// Concatenando usando o metodo nativo concat(  )
// Esse método não altera os arrays existentes, mas, em vez disso, retorna um novo array.
const numeros = num1.concat(num2, num3);

console.log(numeros);
