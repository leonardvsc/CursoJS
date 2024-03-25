try {
  // Tente executar, caso de erro, execute o catch!
  console.log(naoExisto);
} catch (error) {
  console.log("Não existe!"); // Se der erro, mostre isso
  console.log(error); // Mostra o erro
}
