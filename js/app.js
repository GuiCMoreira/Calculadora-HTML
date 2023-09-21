//Números

let botao0 = document.getElementById("b0");
let botao1 = document.getElementById("b1");
let botao2 = document.getElementById("b2");
let botao3 = document.getElementById("b3");
let botao4 = document.getElementById("b4");
let botao5 = document.getElementById("b5");
let botao6 = document.getElementById("b6");
let botao7 = document.getElementById("b7");
let botao8 = document.getElementById("b8");
let botao9 = document.getElementById("b9");

//Operadores

let botaomult = document.getElementById("bmult");
let botaosubt = document.getElementById("bsubt");
let botaosoma = document.getElementById("bsoma");
let botaodivi = document.getElementById("bdivi");
let botaoporc = document.getElementById("bporc");

//Outros

let botaoponto = document.getElementById("bponto");
let botaoigual = document.getElementById("bigual");
let botaoac = document.getElementById("bac");

let documento = window.document;

//Operador e auxiliar

let operador = document.getElementById("operador");
let auxiliar = document.getElementById("auxiliar");

//Criando as funções

botao0.addEventListener("click", function () {
  numero(this.value);
});
botao1.addEventListener("click", function () {
  numero(this.value);
});
botao2.addEventListener("click", function () {
  numero(this.value);
});
botao3.addEventListener("click", function () {
  numero(this.value);
});
botao4.addEventListener("click", function () {
  numero(this.value);
});
botao5.addEventListener("click", function () {
  numero(this.value);
});
botao6.addEventListener("click", function () {
  numero(this.value);
});
botao7.addEventListener("click", function () {
  numero(this.value);
});
botao8.addEventListener("click", function () {
  numero(this.value);
});
botao9.addEventListener("click", function () {
  numero(this.value);
});

//Operadores

botaomult.addEventListener("click", function () {
  operacoes(this.value);
});
botaosubt.addEventListener("click", function () {
  operacoes(this.value);
});
botaosoma.addEventListener("click", function () {
  operacoes(this.value);
});
botaodivi.addEventListener("click", function () {
  operacoes(this.value);
});
botaoporc.addEventListener("click", porc);

//Outros

botaoigual.addEventListener("click", igual);

botaoponto.addEventListener("click", ponto);

botaoac.addEventListener("click", ac);

documento.addEventListener("keypress", function (event) {
  teclado(event.key);
});

//Funções

function numero(valor) {
  let aux = document.getElementById("mostrador");
  aux.value += valor;
  if (aux.value.indexOf(".") == -1) {
    aux.value = parseFloat(mostrador.value);
  }
}

function operacoes(valor2) {
  if (operador.value != "") {
    igual();
  }
  let mostra = document.getElementById("mostrador");
  auxiliar.value = mostra.value;
  mostra.value = 0;
  operador.value = valor2;
}
function igual() {
  let mostra2 = document.getElementById("mostrador");
  let operador1 = parseFloat(mostra2.value);
  let operador2 = parseFloat(auxiliar.value);
  let operacao = operador.value;

  if (operacao == "-") {
    mostra2.value = operador2 - operador1;
    operador.value = "";
    auxiliar.value = "";
  }
  if (operacao == "+") {
    mostra2.value = operador2 + operador1;
    operador.value = "";
    auxiliar.value = "";
  }
  if (operacao == "/") {
    mostra2.value = operador2 / operador1;
    operador.value = "";
    auxiliar.value = "";
  }
  if (operacao == "x") {
    mostra2.value = operador2 * operador1;
    operador.value = "";
    auxiliar.value = "";
  }
}

function ponto() {
  let mostrador = document.getElementById("mostrador");
  mostrador.value = parseFloat(mostrador.value);
  if (mostrador.value.indexOf(".") == -1) {
    mostrador.value += ".";
  }
}

function ac() {
  auxiliar.value = "0";
  operador.value = "";
  mostrador.value = "0";
}

function porc() {
  mostrador.value = mostrador.value / 100;
}

function teclado(codigo) {
  switch (codigo) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      numero(codigo);
      break;

      
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
      operacoes(codigo);
      break;

    case "=":
    case "Enter":
      igual();
      break;

    case "C":
    case "c":
      ac();
      break;

    case ".":
    case ",":
      ponto();
      break;
  }
}
