// Declaração de Variáveis

let saldo = 1000
let maiorValor = 0
let mediaInseridos = 0
let continuar = false
let totalTransacoes = 0

//Sistema bancário

do{
    const nome = prompt("Digite seu nome: ")
    const cpf = Number(prompt("Digite seu CPF: "))
    let valor = Number(prompt("Digite um valor: "))

    //Oferecendo opção de saque ou depósito

    let resposta = prompt("Você deseja realizar um saque ou depósito?S/D")

    //Estrutura para verificar se é possivel que transação seja realizada.
    
    if(valor < 0){
        console.log("Valor Inválido. Transação não realizada.")
    }else if(resposta == "S" && valor > saldo){
        console.log("Saldo insuficiente. Transação não realizada")
    }else if(resposta == "S"){
        console.log("Seja bem vindo " + nome + " seu saldo é de " + saldo)
        saldo -= valor
        totalTransacoes++
        mediaInseridos += valor
        if(valor > maiorValor){
            maiorValor = valor
        }
        console.log("Transação Realizada com sucesso seu saldo atual é " + saldo)
    }else{
        console.log("Seja bem vindo " + nome + " seu saldo é de " + saldo)
        totalTransacoes++
        saldo += valor
        mediaInseridos += valor
        if(valor > maiorValor){
            maiorValor = valor
        }
        console.log("Transação Realizada com sucesso seu saldo atual é" + saldo)
    }


    //Perguntando se o usuário quer continuar
    let opcao = prompt("Deseja Continuar ? 1 para continuar e 2 para parar")

    //Estrutura condicional de parada 
    if(opcao === "1"){
        continuar = true
    }else if(opcao === "2"){
        continuar = false
    }else{
        console.log("Opção inválida")
    }

} while(continuar)

    console.log("Saldo final: " + saldo)
    console.log("Maior valor inserido  " + maiorValor)
    console.log("Média dos valores inseridos: " + mediaInseridos / totalTransacoes)