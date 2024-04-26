// O que uma função construtora faz é criar um objeto.
// A função construtora cria um objeto e retorna ele.

// Na função construtora nós precisamos usar
// A primeira letra do nome da função deve ser maiúscula.

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + " Sou um metodo");
  };
}

const pessoa1 = new Pessoa("Leonardo", "Victor");
const pessoa2 = new Pessoa("Maria", "Oliveira");

pessoa2.metodo();
