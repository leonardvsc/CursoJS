// Estrutura de repetição

const frutas = ["pera", "maca", "uva"];

/* for (let i = 0; i < frutas.length; i++) {
  console.log(`Vamos agora consumir a fruta ${frutas[i]}`);
} */

// O for in percorre o array e retorna quantos indices ele tem
for (let i in frutas) {
  console.log(`Vamos agora consumir a fruta ${frutas[i]}`);
}
