// Metodo splice substitui o push, pop, unshift e shift
// push() adiciona um elemento no final de um array
// pop() remove o último elemento de um array
// unshift() adiciona um elemento no comeco de um array
// shift() remove o primeiro elemento de um array

const nomes = ["Leonardo", "Maria", "João", "Luiza"];

//                     splice(índice, deletar, adicionar);
const removido = nomes.splice(-3, Number.MAX_VALUE, "Diogo");
console.log(removido);
console.log(nomes);
