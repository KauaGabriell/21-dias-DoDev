//Declaração de variáveis 

let nome 
let idade 
let carta = false
let carro = false

//Pedindo Valor para o usuário
nome = prompt("Qual seu nome ?")
idade = parseInt(prompt("Qual sua idade "))
let opcaoCarta = prompt("Você tem Carteira de Motorista ?s/n")
if(opcaoCarta == "s"){
    carta = true
}

let opcaoCarro = prompt("Você tem carro ?s/n")
if(opcaoCarro == "s"){
    carro = true
}

//Exibindo mensagem

if(idade < 18 || !carta){
    console.log(prompt(nome + " você não pode dirigir"))
}else if (idade >= 18 && carta && !carro){
    console.log(prompt("Você pode dirigir, mas não tem carro"))
}else{
    console.log(prompt("Você é o motorista da vez!!"))
}
