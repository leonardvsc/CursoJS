function tempoAlatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject(false);

    setTimeout(() => {
      resolve(msg + " - Passei na promise");
    }, tempo);
  });
}

const promises = [
  "Primeiro valor",
  esperaAi("Promise 1", tempoAlatorio(1, 3)),
  esperaAi("Promise 2", tempoAlatorio(1, 3)),
  esperaAi("Promise 3", tempoAlatorio(1, 3)),
  "Ultimo valor",
];

Promise.all(promises)
  .then((valor) => console.log(valor))
  .catch((err) => console.log(err));
