/* Crie uma função que receba uma temperatura em 
Celsius e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32 */

const readline = require('readline-sync')

function cf (celsius){
    return parseInt(9 * celsius / 5) + 32;
} 

const celsius = readline.question("Qual a temperatura em Celsius?")

console.log('°F', cf(celsius).toFixed(1))
