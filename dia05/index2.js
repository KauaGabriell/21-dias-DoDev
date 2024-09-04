//Declarando variáveis e pedindo qual opção o usuário quer
let quantidade
let valor = 0
let opcao = prompt("Escolha qual opção deseja realizar ? \n 1 - Abastercer com gasolina \n 2 - Abastecer com Álcool \n 3 - Calibrar os pneus")

//Switch Case

switch(opcao){
    case "1": 
        valor = parseInt(prompt("Qual Valor deseja abastecer ?"))
        quantidade = valor / 5
        console.log("Foram Abastecidos " + quantidade + " litros")
    break

    case "2":
        valor = parseInt(prompt("Qual Valor deseja Abastercer ?"))
        quantidade = valor / 3
        console.log("Foram Abastecidos " + quantidade + " litros")
    break

    default:
        console.log("Pneus Calibrados com sucesso")
}



