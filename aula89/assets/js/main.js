// const request = (obj) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener("load", () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject(xhr.statusText);
//       }
//     });
//   });
// };

document.addEventListener("click", (event) => {
  const el = event.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    event.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute("href");

  const objConfig = {
    method: "GET",
    url: href,
  };

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch (e) {
    console.log(e);
  }

  function carregaResultado(response) {
    const resultado = document.querySelector(".resultado");
    resultado.innerHTML = response;
  }
}

fetch("pagina3.html")
  .then((response) => {
    if (response.status !== 200)
      throw Error("Não foi possível carregar a página");
    return response.text();
  })
  .then((html) => {
    document.querySelector(".resultado").innerHTML = html;
  })
  .catch((e) => {
    console.warn(e);
  });
