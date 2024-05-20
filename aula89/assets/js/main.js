const request = (obj) => {
  const xhr = new XMLHttpRequest();

  xhr.open(obj.method, obj.url, true);
  xhr.send();

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      obj.success(xhr.responseText);
    } else {
      obj.error(xhr.statusText);
    }
  });
};

document.addEventListener("click", (event) => {
  const el = event.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    event.preventDefault();
    carregaPagina(el);
  }
});

function carregaPagina(el) {
  const href = el.getAttribute("href");

  const objConfig = {
    method: "GET",
    url: href,
    success(response) {
      carregaResultado(response);
    },
    error(errorText) {
      console.log(errorText);
    },
  };

  request(objConfig);
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}