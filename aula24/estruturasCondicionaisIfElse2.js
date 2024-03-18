const numero = false; // false é considerado como zero
console.log(typeof numero);

if (numero >= 0) {
  // Verificar o tipo de 'numero' antes de fazer a comparação (false está sendo considerado como zero)
  console.log("Sim o numero é maior ou igual a zero");
} else {
  console.log("Negativo");
}

// O if retorna "positivo" porque, em JavaScript, a comparação de um valor booleano como 'false' com um número
// converte 'false' em 0 antes de fazer a comparação. Portanto, a expressão "false >= 0" é avaliada como "0 >= 0",
// que é verdadeira, e o bloco de código dentro do if é executado.

// Para corrigir o comportamento e garantir que o tipo de 'numero' seja numérico antes de fazer a comparação,
// você pode adicionar uma verificação de tipo:

if (typeof numero === "number" && numero >= 0) {
  // Comprarando antes de fazer a comparação
  console.log("Sim o numero é maior ou igual a zero");
} else {
  console.log("Negativo 2");
}
