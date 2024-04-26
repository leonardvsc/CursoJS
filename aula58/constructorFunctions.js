// O que uma função construtora faz é criar um objeto.
// A função construtora cria um objeto e retorna ele.

// Na função construtora nós precisamos usar
// A primeira letra do nome da função deve ser maiúscula.

// Dentro de um objeto que que retorna de uma função construtora
// Não precisamos usar virgula (,) como padrao dentro de um objeto.

function Pessoa(nome, sobrenome) {
  // Atributos privados dentro do construtor
  // Não estão disponíveis fora do construtor
  const id = Math.random();

  // Atributos publicos
  // Pode ser acessados e alterados fora do construtor
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + " Sou um metodo");
  };
}

const pessoa1 = new Pessoa("Leonardo", "Victor");
const pessoa2 = new Pessoa("Maria", "Oliveira");

pessoa2.metodo();
