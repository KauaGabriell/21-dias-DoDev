//Pedindo números para o usuário.

let num1 = Number(prompt("Digite um número: "))
let num2 = Number(prompt("Digite outro número: "))
let operacao = prompt("Qual operação você quer realizar? ")

//Operação do Switch Case

switch(operacao){
    case "+": {
        console.log(prompt(num1 + "+" + num2 + "=" + (num1 + num2)))
        break
    }
    case "-":{
        console.log(prompt(num1 + "-" + num2 + "=" + (num1 - num2)))
        break
    }
    case "/":{
        console.log(prompt(num1 + "/" + num2 + "=" + (num1 / num2)))
        break
    }
    case "*":{
        console.log(prompt(num1 + "*" + num2 + "=" + (num1 * num2)))
        break
    }
}