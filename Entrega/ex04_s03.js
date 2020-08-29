/* Crie uma função com as seguintes características:

A função deve receber 3 parâmetros.
Se somente um argumento for passado, retorne o valor do argumento.
Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
Se nenhum argumento for passado, retorne "não recebeu parâmetro" */

const rls = require("readline-sync");

let a = parseInt(rls.question("Entre com o valor de a: "));
let b = parseInt(rls.question("Entre com o valor de b: "));
let c = parseInt(rls.question("Entre com o valor de c: "));

function operations(param1, param2, param3) {
  if (
    isNaN(param1) == false &&
    isNaN(param2) == false &&
    isNaN(param3) == false
  ) {
    return (param1 + param2) / param3;
  } else if (isNaN(param1) == false && isNaN(param2) == false && !param3) {
    return param1 + param2;
  } else if (isNaN(param1) == false && !param2 && isNaN(param3) == false) {
    return param1 + param3;
  } else if (!param1 && isNaN(param2) == false && isNaN(param3) == false) {
    return param2 + param3;
  } else if (isNaN(param1) == false && !param2 && !param3) {
    return param1;
  } else if (!param1 && isNaN(param2) == false && !param3) {
    return param2;
  } else if (!param1 && !param2 && isNaN(param3) == false) {
    return param3;
  } else {
    return "Nenhum parametro foi recebido.";
  }
}

console.log(operations(a, b, c));