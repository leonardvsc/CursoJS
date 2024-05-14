// Fazendo validação de CPF

// 705.484.450-52 070.987.720-03

/* 

7x | 0x | 5x | 4x | 8x | 4x | 4x | 5x | 0x
x  | x  | x  | x  | x  | x  | x  | x  | x
10 | 9  | 8  | 7  | 6  | 5  | 4  | 3  | 2
70 | 0  | 40 | 28 | 48 | 20 | 16 | 15 | 0 = 237



*/

function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, "");
    },
  });
}

ValidaCPF.prototype.valida = function () {};

const cpf = new ValidaCPF("705.484.450-52");
cpf.valida();
