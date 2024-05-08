const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// Criando uma variavel e usando o filter para filtrar
// pessoas com nome maior que 6 e idade maior que 50
const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length > 6);

// Filtrando pessoas com idade maior que 50+
const pessoasComMaisDeCinquentaAnos = pessoas.filter((obj) => obj.idade > 50);

// Filtrando pessoas que o nome termina com a
const nomeTerminaComA = pessoas.filter((obj) => {
  return obj.nome.toLowerCase().endsWith("a");
});

console.log(nomeTerminaComA);
