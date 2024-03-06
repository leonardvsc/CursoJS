function zeroAEsquerda (num) { // Função que retorna 0 a esquerda de um numero se ele for menor que 10
    return num >= 10 ? num : `0${num}`
}


function formataData (data) { // Função que formata data


    const dia = zeroAEsquerda( data.getDate());
    const mes = zeroAEsquerda( data.getMonth() + 1);
    const ano = data.getFullYear();
    const hora = zeroAEsquerda( data.getHours());
    const min = zeroAEsquerda( data.getMinutes());
    const seg = zeroAEsquerda( data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

// const data = new Date();
const dataBrasil = formataData(new Date());
console.log(dataBrasil);