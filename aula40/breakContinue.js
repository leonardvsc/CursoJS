/**
 * break é usado para sair de loops (como for, while, do-while) e pode ser usado em loops aninhados para sair de um único laço.
 * continue é usado para pular uma iteração atual e pular para a próxima iteração, pode ser usado em loops aninhados para pular uma única iteração.
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
  if (numero === 2) {
    // Se o valor for 2, pula para a proxima iteracao
    continue; // Pula para a proxima iteracao
  }

  console.log(numero);
}
