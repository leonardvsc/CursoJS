// Metodo splice substitui o push, pop, unshift e shift
const nomes = ["Leonardo", "Maria", "João", "Luiza"];

//                     splice(índice, deletar, adicionar);
const removido = nomes.splice(-3, Number.MAX_VALUE, "Victor");
// O splice remove elementos do array e adiciona novos elementos

console.log(removido);
console.log(nomes);
