// Para funcionar deve-se instalar o pacote node-fetch
// npm install node-fetch no terminal da pasta do projeto

// Importando a função fetch do browser, ela permite que nós façamos requisições HTTP
import fetch from "node-fetch";

async function conversorDeMoedas(valor, moedaOrigem, moedaDestino) {
  // Construindo a URL da API
  const url = `https://api.exchangerate-api.com/v4/latest/${moedaOrigem}`;

  // Utilizando a função fetch para fazer a requisição HTTP
  const response = await fetch(url);

  // Verificando se a resposta foi bem sucedida
  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status}`);
  }

  // Convertendo a resposta em JSON
  const data = await response.json();

  // Pegando a cotação da moeda de destino
  const cotacao = data.rates[moedaDestino];

  // Fazendo a conversão
  const conversao = valor * cotacao;

  // Retornando a mensagem com o resultado da conversão
  return `O valor de ${valor} ${moedaOrigem} em ${moedaDestino} é: ${conversao.toFixed(
    2
  )}`;
}

// Chamando a função e passando os parâmetros
console.log(await conversorDeMoedas(10, "USD", "BRL"));
