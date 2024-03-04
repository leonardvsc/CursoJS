// Função que retorna a data em milessimos de segundo (milisegundos)

function formataData (data) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
} 

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);