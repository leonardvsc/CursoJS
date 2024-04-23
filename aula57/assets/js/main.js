function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    inicia() {
      calculadora.cliqueBotoes();
    },

    cliqueBotoes() {
      // this
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          calculadora.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.apagaUm();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
