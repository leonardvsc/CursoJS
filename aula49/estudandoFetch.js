let apiTeste = "https://api.adviceslip.com/advice";

let resposta = await fetch(apiTeste);

if (resposta.ok) {
  let json = await resposta.json();
  console.log(json);
} else {
  console.log("HTTP-Error: " + resposta.status);
}
