// Declaração de função clássica (Function hoisting)
function falaOi() {
  console.log("Oi");
}

// falaOi(); // Executa a função

// As função são first-class objects (Objetos de primeira classe)

// Function expressions (Expressões de função)
// Atribuir uma função a uma variável
// Atribuir uma função a uma constante

const souUmDado = function () {
  // A variavel recebe uma função
  console.log("Sou um dado");
};

function executaFuncao(funcao) {
  funcao();
}

executaFuncao(falaOi); // Uma função que recebe um argumento (constante de uma função)e executa a função passada como argumento
