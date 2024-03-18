// Exemplo de operação ternária para definir se um usuario é VIP ou não
const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
  //
  console.log("VIP");
} else {
  console.log("Normal");
}

const resultado = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário Normal";
console.log(resultado);

// Exemplo de operação ternária para verificar se um número é par ou ímpar
const numero = 42;
const paridade = numero % 2 === 0 ? "par" : "ímpar";
console.log(`O número é ${paridade}.`);

// Exemplo de operação ternária para definir um nível de acesso baseado na idade
const idade = 20;
const nivelAcesso = idade >= 18 ? "acesso concedido" : "acesso negado";
console.log(nivelAcesso);
