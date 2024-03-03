function meuEscopo() {
    const form = document.querySelector('.form');
    const alertMsg = document.querySelector('.alert');

    function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    }

    function receberForm(evento) {
        evento.preventDefault();

        const inputPeso = form.querySelector('#input-peso');
        const inputAltura = form.querySelector('#input-altura');

        if (inputPeso.value === '' || inputAltura.value === '') {
            alertMsg.classList.remove('hide');
            alertMsg.innerText = 'Preencha todos os campos';
            setTimeout(() => {
                alertMsg.classList.add('hide');
            }, 5000);
        } else {
            const peso = parseFloat(inputPeso.value);
            const altura = parseFloat(inputAltura.value);
            console.log(peso, altura);
            const imc = calcularIMC(peso, altura);
            alertMsg.classList.remove('hide');
            alertMsg.innerText = `Seu IMC é ${imc.toFixed(2)}`;
            setTimeout(() => {
                alertMsg.classList.add('hide');
            }, 10000);
        }
    }

    form.addEventListener('submit', receberForm);
}
meuEscopo();