function mostrarHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

const timer = setInterval(function () {
  // setInterval vai configurar um intervalo de tempo para uma função ser executada!
  console.log(mostrarHora());
}, 1000);
