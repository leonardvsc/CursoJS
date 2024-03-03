/* 

Operadores Lógicos

&&  ->  AND ->  E       //Todas as expressões precisam ser verdadeiras para que AND retorne verdadeiro.
||  ->  OR  ->  OU      //Todas as expressões precisam ser falsas para que OR retorne falso.
!   ->  NOT ->  NÃO     //Retorna o oposto da expressão.

*/

const expressaoAnd = true && true && true && true;
const expressaoOr = false || false || true; // Retorna false se todas forem falsas! Se tiver uma expressao verdadeira retorna true.


const usuario = 'Leonardo';
const senha = '123456';

const vaiLogar = usuario === 'Leonardo' && senha === '123456';

console.log(vaiLogar)

// console.log(!true) // Retorna o oposto da expressão.
// console.log(!!true) // Retorna a expressão para o valor original.