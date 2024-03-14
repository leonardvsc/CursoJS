function criarElemento(tag, texto) {
  const elemento = document.createElement(tag);
  const textoDoElemento = document.createTextNode(texto);
  elemento.appendChild(textoDoElemento);
  return elemento;
}

function adicionarAoContainer(elemento) {
  const containerElement = document.querySelector(".container");
  containerElement.appendChild(elemento);
}

// Array de elementos que serão criados dinamicamente
const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "section", texto: "Frase 3" },
  { tag: "footer", texto: "Frase 4" },
];

// Cria um novo elemento div
const div = document.createElement("div");

// Itera sobre cada elemento do array 'elementos' e cria elementos HTML dinamicamente
for (let i = 0; i < elementos.length; i++) {
  const { tag, texto } = elementos[i];
  const novoElemento = criarElemento(tag, texto);
  div.appendChild(novoElemento);
}

adicionarAoContainer(div);
