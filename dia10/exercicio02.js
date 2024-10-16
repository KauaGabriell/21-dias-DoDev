let array = [];
let arrayInvertido = [];

//Perguntando para o usuário
let qtdNum = parseInt(prompt("Quantos números quer inserir:"))


//Populando array

for(i = 0; i < qtdNum; i++){
    let numero = parseInt(prompt("Digite um número: "))
    array[i] = numero
    
}

//Exibir array original
console.log(array)

//Invertendo Array
let contador = qtdNum - 1;
for(i = 0; i < 5; i++){
    arrayInvertido[i] = array[contador]
    contador--
}

//Exibir Array Invertido
console.log(arrayInvertido)