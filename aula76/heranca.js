// Produto -> aumento, desconto
// Camiseta = Cor, Caneca = Material

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

// Adicionando metodos (prototype dos objetos criados pelo construtor de Produto)
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

// A função construtora Camiseta herda os metodos do construtor de Produto
// Camiseta é uma subfunção contrutora de Produto
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
// Setando os prototypes de Produto para Camiseta
Camiseta.prototype = Object.create(Produto.prototype);
// Setando os prototype constructor de Camiseta para Camiseta
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;
  this.estoque = estoque;
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto("generico", 10);
const camiseta = new Camiseta("Regata", 7.5, "Preta");
const caneca = new Caneca("Caneca", 15, "Porcelana", 5);

camiseta.aumento(10);
console.log(produto);
console.log(camiseta);
caneca.desconto(5);
console.log(caneca);
