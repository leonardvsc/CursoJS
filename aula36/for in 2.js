// Estrutura de repetição

const pessoa = {
  nome: "Leonardo",
  sobrenome: "Victor",
  idade: 30,
};

console.log(pessoa.nome); // Acessando objeto por indice
console.log(pessoa["nome"]); // Acessando objeto por indice

// O for in percorre o objeto e retorna quantos indices ele tem
for (let i in pessoa) {
  console.log(i, pessoa[i]); // i = indice, pessoa[i] = valor
}
