const prompt = require('prompt-sync')();
const imc = require('./imc')

let peso = 0
let altura = 0
let totalImc = 0

altura = Number (prompt('Digite sua altura: '))
peso = Number (prompt('Digite seu peso: '))

totalImc = imc(peso, altura)

console.log(`Seu imc é: ${totalImc}`)