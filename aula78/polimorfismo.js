// Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saque de R$${valor} não autorizado. Saldo: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`
  );
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

// Polimorfismo

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(
      `Saque de R$${valor} não autorizado. Saldo: ${this.saldo} | Limite: ${this.limite}`
    );
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.constructor = ContaPoupanca;

const ContaCorrent1 = new ContaCorrente(1, 22, 0, 100);
const ContaPoupanca1 = new ContaPoupanca(12, 33, 0);

ContaCorrent1.depositar(10);
ContaCorrent1.sacar(110);

console.log();

ContaPoupanca1.depositar(10);
ContaPoupanca1.sacar(10);
