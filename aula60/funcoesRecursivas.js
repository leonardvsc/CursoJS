// Função recursiva
// A função recursiva é uma função que chama ela mesma
// Parecido com um loop for

function recursiva(max) {
  if (max >= 10) return;
  max++;
  console.log(max);
  recursiva(max);
}

recursiva(0);
