const data = new Date();
console.log(data.toString());



console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1); // Meu mês começa em 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Milisegundos', data.getMilliseconds());
console.log(data.getDay()); // 0 = domingo, 6 = sabado


console.log(Date.now()); // Retorna o tempo em milisegundos desde o 01/01/1970
