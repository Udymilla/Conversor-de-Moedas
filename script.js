function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  console.log(valorEmDolarNumerico);

  var valorEmReal = valorEmDolarNumerico * 5.25;
  console.log(valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em real é de R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter2() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  console.log(valorEmDolarNumerico);

  var valorEmIene = valorEmDolarNumerico * 143.97;
  console.log(valorEmIene);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em Iene é de ¥" + valorEmIene;
  elementoValorConvertido.innerHTML = valorConvertido;
}