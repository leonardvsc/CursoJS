
console.log('Leonardo Victor' && 0 && 'Maria Oliveira') // Retorna o valor da ultima expressão verdadeira

// O resultado é 0 porque o operador && (AND lógico) retorna o primeiro operando falso que encontrar.
// Neste caso, 'Leonardo Victor' é verdadeiro (truthy), mas 0 é falso (falsy), então a avaliação do AND
// lógico para ali e retorna 0, sem avaliar 'Maria Oliveira'.

// Valores que avaliam em falso com a expressão &&
// console.log(false && 'Qualquer valor'); // Retorna false
// console.log(0 && 'Qualquer valor'); // Retorna 0
// console.log('' && 'Qualquer valor'); // Retorna ''
// console.log(null && 'Qualquer valor'); // Retorna null
// console.log(undefined && 'Qualquer valor'); // Retorna undefined
// console.log(NaN && 'Qualquer valor'); // Retorna NaN

console.log('Leonardo ' && undefined && 'Victor') // Quando encontra o primeiro valor falso, retorna o valor falso.
function falaOi () {
    return 'Oi';
}

let vaiExecutar = true;

// Sem fazer nenhuma estrutura condicional, nós conseguimos fazer uma condição para executar ou não uma função.
console.log(vaiExecutar && falaOi())
