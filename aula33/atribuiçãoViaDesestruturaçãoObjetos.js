const pessoa = {
  // nome: "Luiz", // Caso não exista, o valor será undefined
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Av. Brasil",
    numero: 320,
  },
};

// Atribuição via desestruturacão
// A variavel que vai receber o conteudo tem que ter o mesmo nome do conteudo dentro do objeto
const {
  nome: n = "Não existe", // Se não existir, o valor será o valor padrão passado no parametro
  sobrenome,
  idade,
  endereco: { rua, numero },
} = pessoa;

console.log(n, sobrenome, idade, rua, numero);

/* CRIANDO A VARIAVEL PARA PEGAR SOMENTE O NOME DA PESSOA E O RESTO */
const { nome, ...resto } = pessoa;
console.log(nome, resto);
