/* 
Primitivos (imutáveis) São valores copiados  - string, number, boolean, undefined,
null (bigint, symbol) 

Referência (mutável) São passados por referência - array, object, function
*/

const a = {
    nome: 'Leonardo',
    sobrenome: 'Victor'
}

const b = {...a} // Copiando o objeto e não fazendo referência
console.log(a, b)
a.nome = 'Luiz'
console.log(a, b)