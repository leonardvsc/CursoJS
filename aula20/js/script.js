const form = document.querySelector(".form");
const resultado = document.querySelector(".resultado");

const pessoas = [];

function recebeEventoForm(evento) {
  evento.preventDefault();

  const nome = form.querySelector(".input__nome");
  const sobrenome = form.querySelector(".input__sobrenome");
  const peso = form.querySelector(".input__peso");
  const altura = form.querySelector(".input__altura");

  pessoas.push({
    nome: nome.value,
    sobrenome: sobrenome.value,
    peso: peso.value,
    altura: altura.value,
  });

  console.log(pessoas);

  resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
}

form.addEventListener("submit", recebeEventoForm);
