// Array de elementos que serão criados dinamicamente
const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "section", texto: "Frase 3" },
  { tag: "footer", texto: "Frase 4" },
];
// Seleciona o elemento container no HTML
const container = document.querySelector(".container");

// Cria um novo elemento div
const div = document.createElement("div");

// Itera sobre cada elemento do array 'elementos' e cria elementos HTML dinamicamente
for (let i = 0; i < elementos.length; i++) {
  const { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag); // Cria um novo elemento com a tag especificada
  let textoCriado = document.createTextNode(texto); // Cria um nó de texto com o texto especificado

  tagCriada.appendChild(textoCriado); // Adiciona o nó de texto ao elemento
  div.appendChild(tagCriada); // Adiciona o elemento ao novo div criado
}

container.appendChild(div); // Adiciona o novo div ao container no HTML
