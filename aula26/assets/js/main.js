(function() {
    // Todo o código será inserido aqui dentro do escopo principal.
    // Isso previne que as variáveis e funções sejam acessíveis globalmente.
    
    const form = document.querySelector('form') // Seleciona o formulário

    form.addEventListener('submit' , function (e) { 
        e.preventDefault();
        
        console.log('Evento de submit disparado.')

        const inputPeso = e.target.querySelector('#input-peso');
        const inputAltura = e.target.querySelector('#input-altura');
        
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        console.log(`Input: ${peso}, ${altura}`);
        
        if (!peso) {
            setResultado('Peso inválido', false);
            return;
        }

        if (!altura) {
            setResultado('Altura inválida', false)
            return;
        }

        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc);
        const msg = `Seu IMC é ${imc} (${nivelImc}).`;
        setResultado(msg)

    });

    function getNivelImc (imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
        
        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }

    function getImc(peso, altura) {
       const imc = peso / altura ** 2;
       return imc.toFixed(2);
    }

    function setResultado (msg) {
        const resultado = form.querySelector('.alert'); // Seleciona o elemento .alert

        resultado.classList.remove('hide'); // Remove a classe .hide
        resultado.innerText = `Mensagem: ${msg}`; // Define o texto
    }

})();
