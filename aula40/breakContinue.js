/**
 * break é usado para sair de loops (como for, while, do-while) e pode ser usado em loops aninhados para sair de um único laço.
 * continue é usado para pular uma iteração atual e pular para a próxima iteração, pode ser usado em loops aninhados para pular uma única iteração.
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i in numeros) {
  let numero = numeros[i];

  if (numero === 2 || numero === 5) {
    continue;
  }

  if (numero === 8) {
    break;
  }

  console.log(numero);
}
