function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return 'Domingo'
        case 1:
            return 'Segunda'
        case 2:
            return 'Terça'
        case 3:
            return 'Quarta'
        case 4:
            return 'Quinta'
        case 5:
            return 'Sexta'
        case 6:
            return 'Sabado'
        default:
            return ''
    }
}

const data = new Date(); // Retorna a data
const diaSemana = data.getDay(); // Retorna o dia da semana
const diaSemanaTexto = getDayName(diaSemana); // Chama a função
console.log(diaSemanaTexto); // Chama a variável