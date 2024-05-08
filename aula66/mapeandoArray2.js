/**
 * O método map() executa uma função para cada elemento de um array e
 * retorna um novo array com os resultados.
 *
 * A função passada para o map() recebe 2 parâmetros: o valor do elemento
 * atual e o seu índice.
 */

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

/**
 * Mapando as pessoas e adicionando um id a cada uma
 */

const comIds = pessoas.map((obj, indice) => {
  const newObj = { ...obj };
  newObj.id = indice;
  return newObj;
});

console.log(pessoas);
console.log(comIds);

/**
 * O resultado do map() é um novo array com os resultados da execução
 * da função passada. Neste caso, o resultado é um array de objetos
 * com o nome e o id da pessoa.
 */
