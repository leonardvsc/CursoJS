// defineProperty - defineProperties
function Carro(modelo, ano, placa) {
  this.modelo = modelo;
  this.ano = ano;

  Object.defineProperty(this, "placa", {
    enumerable: true, // permite mostrar a chave
    configurable: true, // permite configuração
    get: function () {
      return placa;
    },
    set: function (valor) {
      if (typeof valor === "string") {
        placa = valor;
      } else {
        throw new TypeError("Placa deve ser uma string");
      }
    },
  });
}

const carro1 = new Carro("Micro", 2010, "ABC-1234");
console.log(carro1);

carro1.placa = "CNH-3233";

console.log(carro1.placa);
