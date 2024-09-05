//Declarando constantes
const nome = prompt("Qual seu nome ?")
const idade = Number(prompt("Qual sua idade ?"))
const peso = Number(prompt("Qual seu peso ?"))
const altura = Number(prompt("Qual sua altura ?"))
const profissao = prompt("Qual sua profissão ?")

//Exibindo texto para o usuário

console.log("Olá, " + nome + " , você tem " + idade + " anos, é " + profissao + ", tem " + altura + " de altura e pesa " + peso + " kilos")

//Verificando se o usuário é maior de idade

if(idade > 18){
    console.log("Você está liberado para tomar umas geladas")
}else{
    console.log("Sem geladas para você !!")
}

//Exibindo a idade do usuário em meses, semanas e dias.

let dias = parseInt(idade * 365)
let semanas = parseInt(idade *  52)
let meses = parseInt(idade * 12)

console.log ("Você possui " + meses + " meses, " + semanas + " semanas e " + dias + " dias de idade.")

//Calculando IMC e faixa do usuário

let imc = peso / (altura * altura)

if(imc < 18.5){
    console.log(nome + " você se encontra na magreza.")
}else if(imc > 18.5 && imc < 24.9){
    console.log(nome + " você se encontra no peso normal.")
}   