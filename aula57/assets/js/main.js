function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      calculadora.cliqueBotoes();
    },

    cliqueBotoes() {
      // this
      document.addEventListener(
        "click",
        function (e) {
          const el = e.target;

          if (el.classList.contains("btn-num")) {
            this.btnParaDisplay();
          }
        }.bind(this)
      );
    },

    btnParaDisplay() {
      alert("Você apertou um botão de numero");
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
