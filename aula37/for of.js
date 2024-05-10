// For in - Retorna o índice ou chave
// For of - Retorna o valor em si

//            0123456789
const nome = "Leonardo Victor";

const nomes = ["Luiz", "Maria", "João"];

/* for (let index in nome) {
  console.log(index);
}

for (let valor of nome) {
  console.log(valor);
}

for (let nome of nomes) {
  console.log(nome);
} */

nomes.forEach((valor) => {
  console.log(valor);
});

nomes.forEach((valor, indice) => {
  console.log(valor, indice);
});
