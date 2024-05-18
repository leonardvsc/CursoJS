function tempoAlatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(msg);
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Frase 1", tempoAlatorio(1, 3))
  .then((resposta) => {
    return esperaAi("Frase 2", tempoAlatorio(1, 3));
  })

  .then((resposta) => {
    return esperaAi("Frase 3", tempoAlatorio(1, 3));
  })
  .catch((erro) => {
    console.log(erro);
  });
