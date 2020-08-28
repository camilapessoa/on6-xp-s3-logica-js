/* Crie uma função que receba um número e devolva uma soma progressiva. 
Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, 
o resultado de 1 + 2 + 3 + 4 + 5. */
//for 
//let porque variavel nao e constante

const readline = require('readline-sync')
const num = parseFloat(readline.question("Insira o valor: "))
let somapa = 0

function pa(num){
  
  for (let a = 1; a <= num ; a ++){
    somapa += a

  }
  console.log("A soma da progressão aritmética é: ", somapa)

}

pa(num)