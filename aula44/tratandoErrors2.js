function somar(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new ReferenceError("x e y precisam ser numeros");
  }
  return x + y;
}

try {
  console.log(somar(2, 2));
} catch (error) {
  //console.log(error);
  console.log("Erro mais amigável para o usuário.");
}
