// Reduce é uma das formas mais poderosas de trabalhar com arrays no JavaScript
// Ela permite reduzir o array em um único valor, seja um número, string, objeto
// etc. Isso é feito com a ajuda de uma função anônima que é executada para cada item
// do array, e que recebe como parâmetros o valor acumulado até o momento
// (acumulador), o valor atual do item, e o índice do item (indice)

// Nesse exemplo estamos criando uma variável chamada total que irá armazenar o resultado
// da redução do array numeros.

// A reduce funciona da seguinte maneira: ela executa a função anônima passando o valor
// inicial (no caso, o valor 0) e o primeiro item do array. O resultado dessa execução
// é usado como o valor acumulado para a próxima iteração, e assim por diante, até que todos
// os itens do array tenham sido processados. O resultado final da execução da reduce
// é o valor acumulado na última iteração.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor, indice) => {
  // Aqui estamos somando o valor atual com o valor acumulado
  // e imprimindo o resultado da soma e o valor atual na consola
  acumulador = acumulador + valor;
  // console.log(acumulador, valor);
  return acumulador;
}, 0); // O valor inicial de 0 que é passado como parâmetro para a reduce

console.log(total);
