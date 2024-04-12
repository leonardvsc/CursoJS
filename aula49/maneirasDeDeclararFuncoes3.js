// Criamdo uma arrow function
const funcaoArrow = (x, y) => {
  console.log("Sou uma arrow function");
  return x + y;
};

function executarFuncao(funcao) {
  funcao();
}

executarFuncao(funcaoArrow);
