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

async function executar() {
  try {
    const fase1 = await esperaAi("Fase 1", tempoAlatorio(1, 3));
    console.log(fase1);
    const fase2 = await esperaAi("Fase 2", tempoAlatorio(1, 3));
    console.log(fase2);
    const fase3 = await esperaAi("Fase 3", tempoAlatorio(1, 3));
    console.log(fase3);
  } catch (e) {
    console.log(e);
  }
}

executar();

// esperaAi("Frase 1", tempoAlatorio(1, 3))
//   .then((valor) => {
//     console.log(valor);
//     return esperaAi("Frase 2", tempoAlatorio(1, 3));
//   })
//   .then((valor) => {
//     console.log(valor);
//     return esperaAi("Frase 3", tempoAlatorio(1, 3));
//   })
//   .catch((erro) => console.log(erro));
