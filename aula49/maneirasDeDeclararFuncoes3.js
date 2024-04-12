const souUmDado = function () {
  // A variável recebe uma função
  console.log("Sou um dado");
};

function executaFuncao(funcao) {
  funcao();
  return funcao;
}

console.log(executaFuncao(souUmDado));
