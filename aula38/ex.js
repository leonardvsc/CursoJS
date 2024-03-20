// querySelector só retorna o primeiro elemento que corresponda ao seletor.
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = "#fff";
  p.style.padding = "20px";
}
