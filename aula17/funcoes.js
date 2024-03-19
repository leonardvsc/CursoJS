// Funções executa ações de um bloco de código
// A unica coisa que você quer com uma função é mandar um valor e geralmente pegar um valor de volta
// Tem funções que não retorna valor também!

function saudacao1(nome, idade) {
  // Função usando parametros para receber valores. (Como uma variável)
  console.log(`Bom dia ${nome} sua idade é ${idade}!`); // Devo utilizar os parametros dentro do corpo da função. (Sem retorno)
}

saudacao1("Luiz", "20"); //  Chamando a função com os argumentos dos parametros.

function saudacao2(nome, idade) {
  // Função usando parametros para receber valores. (Como uma variável)
  return `Bom dia ${nome} sua idade é ${idade}!`; // Devo utilizar os parametros dentro do corpo da função. (Com retorno)
}

const variavel2 = saudacao2("Leonardo", "50"); //  Chamando a função com os argumentos dos parametros. (Salvando o retorno em uma variavél)
console.log(variavel2);

function saudacao(nome, idade) {
  return {
    nome: nome,
    idade: idade,
  };
}
