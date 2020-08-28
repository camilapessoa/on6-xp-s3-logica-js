/* Agora faça o contrário, uma função que receba uma temperatura em Fahrenheit
e chame uma função que converta para Celsius. */

const readline = require('readline-sync')

function fc (Fahrenheit){
    return parseInt((Fahrenheit - 32) * 5 / 9);
} 

const Fahrenheit = readline.question("Qual a temperatura em Fahrenheit?")

console.log('°C', fc(Fahrenheit).toFixed(1))