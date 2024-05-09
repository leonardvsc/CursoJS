const array = [10, 20, 30];

// Atribuição via desestruturacão em uma função de um array
function funcao([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}

funcao(array); // Passando um array como argumento para a função
