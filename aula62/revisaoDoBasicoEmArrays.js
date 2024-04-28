//                  0          1        2
// const nomes = ["Leonardo", "Maria", "João"]; // Array literal (normal)

const nomes = new Array("Leonardo", "Maria", "João"); // Criando array com construtor
// Funciona para String, Objetos, Funções, numero...

nomes[2] = "Joaquim";
delete nomes[2];

console.log(nomes);
