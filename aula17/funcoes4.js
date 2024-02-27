// Algumas formas de criar funções

function soma(){}  // Declaração clássica de função

// Jogando uma função dentro de uma varivel
// Sempre que atribuir função a uma variavél precisa terminar a expressão com ponto-e-virgula (;) 
const raiz = function (n) {  
    return n ** 0.5 // n elevado à 0.5 para obter a raiz quadrada
};

//console.log(raiz(9))
//console.log(raiz(16))
//console.log(raiz(25))


// Maneira mais moderna de criar funções (arrow-function)
const divisao = (x, y) => {
    return x / y;
};

console.log(divisao(10, 5));


// Quando tem só uma linha na função pode usar assim:
const menos = (x, y) => x - y;

// Quando tem só um parâmetro não precisa utilizar parênteses 
const raiz2 = n => n ** 0.5;
console.log(raiz2(9))
