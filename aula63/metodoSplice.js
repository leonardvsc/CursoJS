const nomes = ["Leonardo", "Maria", "João", "Luiza"];

//                     splice(índice, deletar, adicionar);
const removido = nomes.splice(-3, Number.MAX_VALUE, "Diogo");
console.log(removido);
console.log(nomes);
