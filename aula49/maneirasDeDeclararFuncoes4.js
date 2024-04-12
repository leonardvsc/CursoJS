// criando uma função dentro de um objeto com o novo metodo
const obj = {
  fala: function () {
    console.log("Estou falando...");
  },
  falaNovoMetodo() {
    console.log("Estou falando com o novo metodo...");
  },
};

obj.fala();
obj.falaNovoMetodo();
