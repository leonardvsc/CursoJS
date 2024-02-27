//            01234567  <- Indice de uma variavel normal
const nome = 'Leonardo';

//              0       1        2       <- Indice de uma variavel array
let nomes = ['Luiz', 'Maria', 'João'];

nomes.push("Luiza", "Leonardo")
console.log(nomes.slice(0, -1))


console.log(nome.toLocaleLowerCase().indexOf("l")) // Convertenho string para minpusculo para verificar se tem o letra com indexOf, se caso estiver recebendo por input pode ser tanto Maiúsculas ou Minúsculas.


// console.log(typeof nomes); // Sendo um array mais pelo javascript é considerado com object

// console.log(nomes instanceof Array);  // Verifica se é um array

// const fatiar = nomes.slice(0 , 2) // Pegar posição no array
// console.log(fatiar)

// delete nomes[1], // Deletando um índice

// const resultadoPop = nomes.shift(); // Função que remove do começo do índice de um array com posibilidade de salvar o valor removido em outra variavel.
// const resultadoPop = nomes.pop(); // Função que remove do final do índice de um array com posibilidade de salvar o valor removido em outra variavel.
// console.log(resultadoPop);

// nomes.unshift('Diogo') // Adiciona no começo

// nomes.push('Luiza'); // Adiciona no fim
// nomes.push('Fábio'); // Adiciona no fim

// nomes[nomes.length] = 'Luiza'; // Adiciona no fim
// nomes[nomes.length] = 'Fábio'; // Adiciona no fim
// nomes[nomes.length] = 'Luana'; // Adiciona no fim

// nomes[0] = 'Eduardo' // Altera

//console.log(nomes[2])  // Acessar índice com notação de colchetes





// const descreve uma variável que não pode ser reatribuída (com o operador de atribuição =).
// Depois de criá-la, não podemos fazer algo assim:

// const nome = 'luiz';
// nome = 'joão'; // Erro: Assignment to constant variable.

// Porém, existe uma diferença entre variável e valor.

/**
Variáveis são como um apelido para um valor, uma espécie de alias para mencionar algum valor salvo na memória.

Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores são imutáveis, como number, string, boolean, undefined, null, symbol e bigint (os primitivos todos são imutáveis). Outros tipos são mutáveis, como arrays e objetos (objetos em geral são mutáveis, com exceção de null).
Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. Como é o caso do array, que pode ser composto por vários outros tipos de dados.
Quando usamos const com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de const não permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar essa constante).
Já quando usamos const com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.
Por este motivo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.
 */

// Exemplos: 
// Isso pode

// const array = [1, 2, 3, 4, 5];
// array.pop();
// array[0] = 1024;
// console.log(array); // [ 1024, 2, 3, 4 ]

// Isso não pode

// const array = [1, 2, 3, 4, 5];
// array = 'Legal'; // Assignment to constant variable.