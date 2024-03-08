function meuEscopo() {

    const data = new Date(); //pegando a data atual


    function criaDiaDaSemana(dia) {
        switch (dia) {
            case 0:
                return 'Domingo'
            case 1:
                return 'Segunda-feira'
            case 2:
                return 'Terça-feira'
            case 3:
                return 'Quarta-feira'
            case 4:
                return 'Quinta-feira'
            case 5:
                return 'Sexta-feira'
            case 6:
                return 'Sábado'
            default:
                return 'Não encontrado'
        }
    }

    function criaMes (mes) {
        switch (mes) {
            case 0:
                return 'Janeiro'
            case 1:
                return 'Fevereiro'
            case 2:
                return 'Março'
            case 3:
                return 'Abril'
            case 4:
                return 'Maio'
            case 5:
                return 'Junho'
            case 6:
                return 'Julho'
            case 7:
                return 'Agosto'
            case 8:
                return 'Setembro'
            case 9:
                return 'Outubro'
            case 10:
                return 'Novembro'
            case 11:
                return 'Dezembro'
            default:
                return 'Não encontrado'
        }
    }


    const enviaDados = document.getElementById('dataEHora');


    enviaDados.innerText = `${criaDiaDaSemana(data.getDay())}, ${data.getDate()} de ${criaMes(data.getMonth())} de ${data.getFullYear()}`
    enviaDados.innerText += ` ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`



}

meuEscopo();