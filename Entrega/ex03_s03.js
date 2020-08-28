/* Faça um programa que receba um valor em metros e chame uma 
função que converta em milímetros. */

const readline = require('readline-sync')

function milímetros (metros){
    return parseFloat (metros / 0.0010000)
    //return parseFloat(metros * 1000)
    
}

const metros = readline.question("Metros: ")
console.log(milímetros(metros).toFixed(1), 'mm')
