//Variáveis
let modelos = [];
let anos = [];
let valores = [];
let continuar =  true;
let contador = 0;

//Cadastro

while(continuar){
let modelo = prompt("Digite o modelo do carro")
modelos[contador] = modelo
let ano = prompt("Digite o ano do carro")
anos[contador] = ano
let valor = parseFloat(prompt("Digite valor do carro"))
valores[contador] = valor
contador++;

//Loop de reposta

let reposta = prompt("Deseja continuar? s/n")
if(reposta == 'n'){
    continuar = false
}

}

//Exibir array

console.log('Os carros cadastrados são: ')
for(i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " " + anos[i] + " " + valores[i])
}

//Ordenar por preço

for(i = 0; i < valores.length; i++){
    for(j = 0; j < valores.length - i - 1; j++){
        if(valores[j] > valores[j + 1]){

            let modeloMaior = modelos[j]
            modelos[j] = modelos[j+1]
            modelos[j+1] = modeloMaior

            let anoMaior = anos[j]
            anos[j] = anos[j+1]
            anos[j+1] = anoMaior

            let valorMaior = valores[j]
            valores[j] = valores[j+1]
            valores[j+1] = valorMaior

        }
    }
}

//Exibindo
console.log("Carros ordenados pelo preço")
for(i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " " + anos[i] + " " + valores[i])
}