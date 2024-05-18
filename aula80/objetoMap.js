const pessoas = [
  { id: 3, nome: "Leonardo" },
  { id: 2, nome: "Maria" },
  { id: 1, nome: "Helena" },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas); // Map(3) { 3: {...}, 2: {...}, 1: {...} }
console.log(novasPessoas.get(2)); // { id: 2, nome: 'Maria' }

for (const pessoa of novasPessoas) {
  const [id, { nome }] = pessoa;

  console.log(id, nome);
  console.log(pessoa);
}
