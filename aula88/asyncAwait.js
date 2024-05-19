function tempoAlatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("BAD VALUE");
        return;
      }

      resolve(msg + " - Passei na promise");
    }, tempo);
  });
}

esperaAi("Frase 1", tempoAlatorio(1, 3))
  .then(() => {
    return esperaAi("Frase 2", tempoAlatorio(1, 3));
  })
  .then(() => {
    return esperaAi("Frase 3", tempoAlatorio(1, 3));
  })
  .catch((e) => {
    console.log(e);
  });
