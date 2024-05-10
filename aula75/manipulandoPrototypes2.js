const PrimeiroObjeto = {
  nome: "Leonardo",
};

const SegundoObjeto = {
  sobrenome: "Victor",
};

Object.setPrototypeOf(PrimeiroObjeto, SegundoObjeto);
// Aqui, o SegundoObjeto é o protótipo do PrimeiroObjeto.
// Isso significa que o PrimeiroObjeto herda todos os métodos e propriedades do SegundoObjeto.
// Além disso, o PrimeiroObjeto também herda os métodos e propriedades do Object.prototype,
//pois o SegundoObjeto é o protótipo do Object.prototype.

console.log(`${PrimeiroObjeto.nome} ${PrimeiroObjeto.sobrenome}`);
// O objeto PrimeiroObjeto tem acesso ao valor de sobrenome do objeto SegundoObjeto,
//pois o SegundoObjeto é o protótipo do PrimeiroObjeto.
