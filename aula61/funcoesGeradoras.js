// Funções geradoras

function* geradora1() {
  // Código qualquer ...
  yield "valor 1";

  // Código qualquer ...
  yield "valor 2";

  // Código qualquer ...
  yield "valor 3";
}

const g1 = geradora1();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());

// value udefined e done true
console.log(g1.next());
