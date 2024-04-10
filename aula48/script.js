/* SELECIONANDO ELEMENTOS */
const inputTarefa = document.querySelector(".input-tarefa");
const btnAddTarefa = document.querySelector(".btn-add-tarefa");
const tarefas = document.querySelector(".tarefas");

document.addEventListener("DOMContentLoaded", function () {
  inputTarefa.focus();
});

function criaLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
}

btnAddTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});
