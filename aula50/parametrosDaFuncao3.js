// Atribuição via desestruturacão em uma função

function funcao({ nome, sobrenome, idade }) {
  // Função espera como argumento um objeto com os campos nome, sobrenome e idade
  console.log(`O nome e ${nome} ${sobrenome} tem ${idade} anos.`);
}

const pessoa = {
  nome: "Leonardo",
  sobrenome: "Victor",
  idade: 30,
  endereco: "Rua ABC, 123",
  altura: 1.7,
  peso: 73.5,
};

funcao(pessoa); // Passando um objeto como argumento para a função
