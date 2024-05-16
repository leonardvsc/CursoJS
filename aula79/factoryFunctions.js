const falar = {
  falar() {
    console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
  },
};

const andar = {
  andar() {
    console.log(`${this.nome} andou.`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} comeu.`);
  },
};

const pessoaPrototype = Object.assign({}, falar, andar, comer);
console.log(pessoaPrototype);

function criaPessoa(nome, sobrenome, idade) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
    idade: { value: idade },
  });
}

const pessoa1 = criaPessoa("Leonardo", "Victor", 30);
console.log(pessoa1);
