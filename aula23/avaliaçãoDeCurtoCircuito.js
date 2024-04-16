console.log("Leonardo Victor" && 0 && "Maria Oliveira");

// O resultado é 0 porque o operador && (AND lógico) retorna o primeiro operando falso que encontrar.
// Neste caso, 'Leonardo Victor' é verdadeiro (truthy), mas 0 é falso (falsy), então a avaliação do AND
// lógico para ali e retorna 0, sem avaliar 'Maria Oliveira'.

// Demonstração de valores que avaliam em falso com a expressão && (AND lógico)
console.log(false && "Não vai ser avaliado"); // Retorna false
console.log(0 && "Não vai ser avaliado"); // Retorna 0
console.log("" && "Não vai ser avaliado"); // Retorna ''
console.log(null && "Não vai ser avaliado"); // Retorna null
console.log(undefined && "Não vai ser avaliado"); // Retorna undefined
console.log(NaN && "Não vai ser avaliado"); // Retorna NaN

// Qualquer coisa diferente dessas de cima avaliam em true com a expressão && (AND lógico)

function falaOi() {
  return "A ação foi realizada com sucesso por que a variavel vaiExecutar é true.";
}

let vaiExecutar = true;

// Sem fazer nenhuma estrutura condicional, nós conseguimos fazer uma condição para executar ou não uma função.
console.log(vaiExecutar && falaOi());

// Função que retorna um número aleatório entre min e max
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let totalDeParticipantes = 100;
console.log(gerarNumeroAleatorio(0, totalDeParticipantes));
