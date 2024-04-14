function criarMultiplicado(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplicaFunction = criarMultiplicado(2);

console.log(duplicaFunction(10));
