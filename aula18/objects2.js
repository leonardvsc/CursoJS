function criaPessoa (nome, sobrenome, idade) { // Criando função com os parametros
    return { // Função factory que cria um objeto
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criaPessoa('Leonardo','Victor', 30) // Chamando a função com os argumentos dos parametros.
const pessoa2 = criaPessoa('Luiz','Otávio', 44) // Chamando a função com os argumentos dos parametros.
const pessoa3 = criaPessoa('Maria','Oliveira', 55) // Chamando a função com os argumentos dos parametros.
const pessoa4 = criaPessoa('Eduardo','Moreira', 32) // Chamando a função com os argumentos dos parametros.
const pessoa5 = criaPessoa('Jean','Otávio', 25) // Chamando a função com os argumentos dos parametros.
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)