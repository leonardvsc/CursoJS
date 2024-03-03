//estruturas condicionais if, else, else if
// If pode ser usado com ou sem else


const hora = 5;
const nome = 'Leonardo';

if (hora >= 0 && hora <= 11) { // Verifica se 0 é maior ou igual e 11 se é menor ou igual.
    console.log(`Bom dia ${nome}`)
} else if (hora >= 12 && hora <= 17) {
    console.log(`Boa tarde ${nome}`)
} else if (hora >=18 && hora <= 23) {
    console.log(`Boa noite ${nome}`)
} else {
    console.log(`Ola ${nome} deu algum bug no horario!`)
}

const tenhoGrana = 'Luiz'; // String avalia em true

if (tenhoGrana) {
    console.log('Vou sair de casa')
} else {
    console.log('Vou ficar em casa')
}