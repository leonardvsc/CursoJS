const objA = {
  chaveA: "A",
  // __proto__: Object.__proto__ > Object.__proto__ > null
};

const objB = {
  chaveB: "B",
  // __proto__: objA
};

const objC = new Object();

objC.variavelCriada = "Olha eu aqui!";
console.log(objC.variavelCriada);

Object.setPrototypeOf(objB, objA);

console.dir(objB.chaveA);

console.dir(objC.variavelCriada);

Object.setPrototypeOf(objC, objA);

console.log(objC);
