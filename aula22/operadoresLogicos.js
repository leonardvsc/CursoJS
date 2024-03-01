/* 

Operadores Lógicos

&&  ->  AND ->  E
||  ->  OR  ->  OU
!   ->  NOT ->  NÃO

*/

const expressaoAnd = true && true && true && true;
const expressaoOr = false || false || true; // Retorna false se todas forem falsas! Se tiver uma expressao verdadeira retorna true.


const usuario = 'Leonardo';
const senha = '123456';

const vaiLogar = usuario === 'Leonardo' && senha === '123456';

//console.log(vaiLogar)

console.log(!true) // Retorna o oposto da expressão.
console.log(!!true) // Retorna a expressão para o valor original.