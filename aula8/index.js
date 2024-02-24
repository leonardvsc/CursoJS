const nome = 'Leonardo Victor';
const sobrenome = 'Silva';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal;
let anoNascimento;

console.log(indiceMassaCorporal)
console.log(anoNascimento)

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento  = 2024 - idade;

console.log(nome + ' ' + sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`)
console.log(`${nome} nasceu em ${anoNascimento}.`)
