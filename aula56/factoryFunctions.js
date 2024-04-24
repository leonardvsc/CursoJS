//Factory function
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome: nome,
    sobrenome: nome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },

    fala(assunto) {
      return `${this.nome} está ${assunto}.`;
    },

    altura,
    peso,

    // Getter
    get imc() {
      const i = this.peso / this.altura ** 2;
      return i.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Leonardo", "Victor", 1.8, 80);
p1.nomeCompleto = "Leonardo Victor Silva";
const p2 = criaPessoa("Maria", "Joaquina", 1.6, 62);

//console.log(p1.imc);
//console.log(p1.imc());
//console.log(p1.fala("estudandando JavaScript"));
//console.log(p2.fala("fazendo compras no mercado"));
