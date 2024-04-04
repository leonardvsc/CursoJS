function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
}

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let segundos = 0;
let timer;

function iniciaRelogio() {
  pausar.disabled = false;
  zerar.disabled = false;
  iniciar.disabled = true;
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
  relogio.style.color = "green";
}

function paraRelogio() {
  clearInterval(timer);
  pausar.disabled = true;
  zerar.disabled = false;
  iniciar.disabled = false;
  relogio.style.color = "yellow";
}

function resetaRelogio() {
  paraRelogio();
  relogio.innerHTML = "00:00:00";
  segundos = 0;
  relogio.style.color = "black";
}

document.addEventListener("click", function (e) {
  //Adicionando eventos a todo o documento
  const elemento = e.target; // Selecionando o elemento que disparou o evento de click

  if (elemento.classList.contains("iniciar")) {
    // Verificando se o elemento possui a classe 'iniciar'
    iniciaRelogio();
  }

  if (elemento.classList.contains("pausar")) {
    // Verificando se o elemento possui a classe 'pausar'
    paraRelogio();
  }

  if (elemento.classList.contains("zerar")) {
    // Verificando se o elemento possui a classe 'zerar'
    resetaRelogio();
  }
});
