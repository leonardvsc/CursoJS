// querySelector só retorna o primeiro elemento que corresponda ao seletor.
const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

for (let i in ps) {
  console.log(ps[i]);
}
