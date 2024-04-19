let total = 0;

function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const minhaFuncao = retornaFuncao("Leonardo");
const minhaFuncao2 = retornaFuncao("Eduardo");
console.dir(minhaFuncao2());
