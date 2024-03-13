const sobrenome = "Miranda";

function falaOi() {
  var nome = "Luiz"; // Nome está declarado dentro da função

  console.log(nome, sobrenome);
  return;
}

// console.log(nome); // ReferenceError: nome is not defined

falaOi();
