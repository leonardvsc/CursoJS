console.log(0 || false || null || 'Leonardo Victor' || true) // Retorna o valor da primeira expressão verdadeira.
// Depois de encontrar a primeira expressão verdadeira, retorna o valor da expressão.

const corUsuario = null; // Cor não informada
const corPadrao = corUsuario || 'preto'; // Retorna o valor da primeira expressão verdadeira.

console.log(corPadrao) // Retorna 'preto' porque o valor da expressão e falso