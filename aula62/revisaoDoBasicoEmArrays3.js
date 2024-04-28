const nomes = ["Leonardo", "Maria", "João"];
const novo = [...nomes]; // Passando o array nomes para a variável novo

novo.pop(); // Excluindo somente o último item do array da variável novo
console.log(nomes); // Arrey original não foi alterado
console.log(novo);
