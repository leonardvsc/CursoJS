// defineProperty - defineProperties

function Carro(modelo, ano, placa) {
  this.modelo = modelo;
  this.ano = ano;

  Object.defineProperty(this, "placas", {
    enumerable: true,
    value: placa,
    writable: false, // permite alteração
    configurable: true, // permite configuração
  });
}

const carro1 = new Carro("Micro", 2010, "ABC-1234");

carro1.placas = "DEF-5678"; // Tenta alterar o valor da placa
console.log(carro1);
// Se o whiteable for falso, o valor da placa não pode ser alterado
