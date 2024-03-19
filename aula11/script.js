let num1 = prompt("Digite um número");
let num2 = prompt("Digite outro número");
const resultado = Number(num1) + Number(num2);

const resultadoElement = document.getElementById("resultado");
resultadoElement.textContent = `O resultado de ${num1} + ${num2} é igual à ${resultado}.`;
