// IEEE 754-2008

let num1 = 0.7;
let num2 = 0.1;

num1 += num2 // num1 = num1 + num2
num1 += num2
num1 += num2
num1 += num2

num1 = Number(num1.toFixed(2))

console.log(num1)
console.log(num1.toFixed(2))

console.log(Number.isInteger(num1))

// console.log(num1.toString() + num2) // Concatenando String com Número
// num1 = num1.toString() // Converter número em string
// console.log(num1.toString(2)) // Exibir número binario
// console.log(num1.toFixed(2))
// console.log(Number.isInteger(num3)) //Verifica se o numero recebido é inteiro

// let temp = num3 * '5'
// console.log(Number.isNaN(temp))  // Retorna false pois nao ocorreu erro!