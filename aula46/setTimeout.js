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

setTimeout(function () {
  // A partir de um tempo em milisegundos, a função passada como parâmetro será executada.
  clearInterval(timer); // clearInterval para parar o setInterval
}, 10000); // 10 segundos
