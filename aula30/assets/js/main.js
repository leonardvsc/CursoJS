const enviarDados = document.querySelector('#receberDados');

const data = new Date();

enviarDados.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });