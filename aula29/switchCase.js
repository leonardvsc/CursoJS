const data = new Date();
let diaDaSemana = data.getDay();
diaDaSemana = 7;
let diaSemanaTexto;


switch (diaDaSemana) { 
    case 0:
        diaSemanaTexto = 'Domingo';
        break;

    case 1:
        diaSemanaTexto = 'Segunda';
        break;

    case 2:
        diaSemanaTexto = 'Terça';
        break;

    case 3:
        diaSemanaTexto = 'Quarta';
        break;

    case 4:
        diaSemanaTexto = 'Quinta';
        break;

    case 5:
        diaSemanaTexto = 'Sexta';
        break;

    case 6:
        diaSemanaTexto = 'Sábado';
        break;
        
    default: // Caso não seja nenhum dos caso, retorta o default: (Não tem necessidade do break)
        diaSemanaTexto = 'Tem algo errado!';
}




console.log(diaDaSemana, diaSemanaTexto)