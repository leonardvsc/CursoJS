/**
 * while é executado uma vez e depois verifica a condição e se for verdadeira executa novamente, se for falsa para de executar.
 * O ideal é usar while quando se não sabe quando a condição vai parar.
 *
 * do while é executado uma vez e depois verifica a condição e se for verdadeira executa novamente.
 * O ideal é usar do while quando se sabe que a condição terá pelo menos uma execução.
 */

function randomNumber(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 11;

/* let result = randomNumber(min, max); */
let result = 10;

// enquanto
// while checa a condição e depois executa o bloco
// Se a condição for falsa não executa o bloco
while (result !== 10) {
  console.log(result);
}

console.log("#######");

// do while tem que executar o bloco pelo menos uma vez antes de checar a condição
do {
  console.log(result);
} while (result !== 10);
