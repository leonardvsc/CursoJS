function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    fala(assunto) {
      return `${this.nome} está ${assunto}.`;
    },
    peso: 80,
  };
}

const p1 = criaPessoa("Leonardo", "Victor");
const p2 = criaPessoa("Maria", "Joaquina");
console.log(p2.fala());
