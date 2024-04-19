function retornaFuncao() {
  const nome = "Leonardo";
  return function () {
    // O que essa função retorna está indo para a variável funcao
    return nome;
  };
}

// Variavel funcao
const funcao = retornaFuncao();
console.log(retornaFuncao());
console.log(funcao());
