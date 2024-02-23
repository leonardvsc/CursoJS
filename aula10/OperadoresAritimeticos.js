/**
 * Aritméticos
 * + Adição ou Concatenação
 * ** Potenciação
 * %  Resto da Divisão
 */

const num1 = 5; // Adição
const num2 = 10;
console.log(num1 + num2);

const num3 = '1'; // Concatenação
const num4 = 1;
console.log(num3 + num4);

const num5 = 7; 
const num6 = 3;
console.log(num5 % num6); // Resto da divisão

const num7 = 5; 
const num8 = 2;
const num9 = 10;
console.log((num7 + num8) * num9); // Presedência

let contador = 1;
contador++;
console.log(contador);

let contador2 = 10;
contador2++;
console.log(++contador2); // Operador de incremento

let contador3 = 10;
contador3--;
console.log(contador3); // Operador de decremento


let contador4 = 50;
contador4 += 2; // +- É igual a ele mesmo mais a soma da variavel/valor
console.log(contador4)

const num10 = 10;
const num11 = parseInt ('5'); // Converte String em Number inteiro
console.log(num10 + num11)

const num12 = 10;
const num13 = Number ('5'); // Converte para Number
console.log(num12 + num13)