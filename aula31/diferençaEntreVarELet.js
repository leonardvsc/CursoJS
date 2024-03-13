const verdadeira = true;
// Let tem escopo de bloco {... bloco} -> Tudo dentro de chaves
// Qualquer par de chave é um escopo para uma variável let
// Var só tem escopo de função

let nome = "Luiz"; // criando
var nome2 = "Luiz"; // Declarando
console.log(nome, nome2);

if (verdadeira) {
  // Só executa se a condição for verdadeira
  let nome = "Eduardo"; // Criando dentro do bloco uma nova variável com o mesmo nome
  var nome2 = "Rogério"; // Redeclarando
  console.log(nome, nome2);

  if (verdadeira) {
    let nome = "Outra coisa"; // Criando dentro do bloco uma nova variável com o mesmo nome
    var nome2 = "Otávio"; // Redeclarando

    console.log(nome, nome2);
  }
}

console.log(nome, nome2);
