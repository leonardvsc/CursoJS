function funcao() {
  console.log("Executando a função sem parametros");
  const pegandoArgumento = arguments[1];
  return console.log(pegandoArgumento);
}

funcao("Leonardo", "Eduardo", "Maria"); // Chamando a função com os argumentos
