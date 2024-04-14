/* function duplica(n) {
  return n * 2;
}

function triplica(n) {
  return n * 3;
}

function quadriplica(n) {
  return n * 4;
} */

// Aprendendo a criar funções closures
// Funções que retornam outras funções
function criarMultiplicador(multiplicador) {
  function multiplicacao(n) {
    return n * multiplicador;
  }
  return multiplicacao;
}

const duplica = criarMultiplicador(2);
const triplica = criarMultiplicador(3);
const quadriplica = criarMultiplicador(4);

console.log(quadriplica(2));
