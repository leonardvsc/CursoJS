const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    },

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
console.log(pessoa1.idade)