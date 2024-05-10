// Cria uma função construtora chamada Pessoa que recebe dois parâmetros: nome e sobrenome.
// Essa função construtora cria um objeto com os dois parâmetros como propriedades.
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

// Adiciona um método chamado nomeCompleto ao protótipo de Pessoa.
// Esse método funciona com qualquer objeto criado a partir da função construtora.
// Sem a necessidade de criar um metodo para cada pessoa.
Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

// Cria três objetos do tipo Pessoa chamados pessoa1, pessoa2 e pessoa3.
const pessoa1 = new Pessoa("Leonardo", "Victor");
const pessoa2 = new Pessoa("Luiz", "Otávio");
const pessoa3 = new Pessoa("Maria", "Oliveira");

// Cria um objeto do tipo Date chamado data.
const data = new Date();

// Imprime as propriedades de pessoa1 no console.
console.dir(pessoa1);

// Imprime as propriedades de data no console.
console.dir(data);

// Imprime o resultado do método nomeCompleto de pessoa1, pessoa2 e pessoa3 no console.
console.dir(pessoa1.nomeCompleto());
console.dir(pessoa2);
console.dir(pessoa3);
