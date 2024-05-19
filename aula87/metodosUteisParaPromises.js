function tempoAlatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("BAD VALUE");
      return;
    }

    setTimeout(() => {
      resolve(msg + " - Passei na promise");
    }, tempo);
  });
}

const promises = [
  esperaAi("Promise 1", tempoAlatorio(1, 5)),
  esperaAi("Promise 2", tempoAlatorio(1, 5)),
  esperaAi("Promise 3", tempoAlatorio(1, 5)),
];

Promise.race(promises)
  .then((valor) => console.log(valor))
  .catch((err) => console.log(err));

// Promise.all(promises)
//   .then((valor) => console.log(valor))
//   .catch((err) => console.log(err));
