// A função definida com a palavra function tem uma variavel chamada arguments
// Ela contém todos os argumentos passados para a função

function funcao() {
  console.log("Executando a função");
  console.log(arguments);

  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
    console.log(total);
  }
}

funcao(1, 2, 3, 4, 5, 6, 7);
