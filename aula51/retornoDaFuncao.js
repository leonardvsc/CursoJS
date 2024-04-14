// Quando encontra um return, a função para de executar e retorna o valor que foi atribuído.

function soma(a, b) {
  return a + b;
}

function criaPessoa(nome, sobrenome) {
  return { nome: nome, sobrenome: sobrenome };
}

const pessoa1 = criaPessoa("Leonardo", "Victor");
const pessoa2 = criaPessoa("Maria", "Oliveira");

console.log(pessoa1);
console.log(pessoa2);
