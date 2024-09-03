//Declaração de Variáveis

let nome = "";
let idade = 0;
let altura = 0;
let peso = 0;

//Solicitando o Valor para o usuário

nome = prompt("Qual seu nome ?")
idade = parseInt(prompt("Qual sua idade?"))
altura = parseFloat(prompt("Qual sua altura ?"))
peso = parseInt(prompt("Qual seu peso?"))

//Obtendo ano de nascimento do usuário.

let anoNasc
anoNasc = 2024 - idade

//Obtendo o IMC do usuário

let IMC
IMC = peso / (altura * altura)

//Imprimindo Valores no Console

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNasc + " tem " + altura + " de altura, pesa " + peso + "kilos e seu IMC é " + IMC)