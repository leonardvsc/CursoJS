// For classico - Geralmente com iterpaveis (arrays ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteraveis, arrays ou strings)

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

nomes.forEach(function (valor) {
  console.log(valor);
});

console.log("#############");

nomes.forEach((valor, indice) => {
  console.log(valor, indice);
});
