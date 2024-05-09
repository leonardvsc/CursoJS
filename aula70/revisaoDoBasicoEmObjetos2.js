// Função construtora
// Função que cria e retorna um objeto
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const pessoa1 = criaPessoa("Leonardo", "Victor", 30);
const pessoa2 = criaPessoa("Maria", "Oliveira", 44);
const pessoa3 = criaPessoa("João", "Moreira", 55);

console.log(pessoa1.nomeCompleto);
