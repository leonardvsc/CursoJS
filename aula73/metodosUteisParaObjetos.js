// Alguns metodo úteis para objetos

// 1 Como copiar um objeto para outro

const produto = {
  nome: "Caneta",
  preco: 1.99,
};

const novoProduto = { ...produto };

novoProduto.nome = "Caneta azul";
console.log(produto, novoProduto);
