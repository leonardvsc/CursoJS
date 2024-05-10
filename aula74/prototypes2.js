// Cria uma função construtora chamada Carro que recebe cinco parâmetros: marca, modelo, ano, cor e placa.
// Essa função construtora cria um objeto com os cinco parâmetros como propriedades.
function Carro(marca, modelo, ano, cor, placa) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.cor = cor;
  this.placa = placa;
}

// Adiciona um método chamado verificarPlaca ao protótipo de Carro.
// Esse método funciona com qualquer objeto criado a partir da função construtora.
// Sem a necessidade de criar um metodo para cada carro.
Carro.prototype.verificarPlaca = function () {
  if (this.placa === "ABC1234") {
    return true;
  } else {
    return false;
  }
};

const carro1 = new Carro("Audi", "R8", 2021, "Vermelho", "ABC1234");
const carro2 = new Carro("BMW", "X5", 2020, "Cinza", "DEF5678");
