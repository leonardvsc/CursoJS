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

// Iteração usando for ... of em uma função geradora
for (let valor of g1) {
  console.log(valor);
}

// Função geradora que gera valores infinitos
function* geradora2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
