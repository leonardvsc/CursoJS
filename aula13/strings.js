//  string São         01234567
let stringIndexadas = "Um texto";

let umaString = 'Um "texto"'; // Para escapar um caractere

console.log(stringIndexadas[3]); // Pegando uma posição na variavél

console.log(stringIndexadas.charAt(3)); // Pegando uma posição na variavél

console.log(stringIndexadas.indexOf("texto")); //Em qual indíce começa a palavra texto na string

console.log(stringIndexadas.lastIndexOf("t")); // Em qual indíce começa de trás pra frente

console.log(stringIndexadas.match(/[a-z]/g)); // Expressão regurar que retorna todas as letras minúsculas.

console.log(stringIndexadas.search(/x/)); // Encontrar a letra no indíce (Símilar ao indexOf, mais aceita expressões regulares).

console.log(stringIndexadas.replace(/Um/, "Trocando")); // Pega uma palavra e substitui por outra.

let classico = "O rato roel a roupa do rei de roma";

console.log(classico.search(/rei/));
console.log(classico.replace(/r/, "p"));
console.log(classico.replace(/r/g, "p")); //Repetir a alteração adicionando a flag "g"
console.log(classico.length); // length começa a contar a partir do 1.
console.log(classico.slice(2, 5)); //Pegando posição da variavél com stard-end.

//Dividir string em todos os espaços e pegar todas as palavras separadas e agrupadas em um array.
console.log(classico.split(" "));
console.log(classico.split(" ", 2)); // Obter somente 2 resultados.
