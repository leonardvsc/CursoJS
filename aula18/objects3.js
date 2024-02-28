function criaPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Eduardo', 30)
console.log(pessoa1)
console.log(pessoa1.nome)