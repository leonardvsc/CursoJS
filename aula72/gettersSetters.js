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
  });
}

const carro1 = new Carro("Micro", 2010, "ABC-1234");
console.log(carro1);
console.log(carro1.pla);
