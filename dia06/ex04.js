//Tabuada do número fornecido e dos próximos 2 números
let num = parseInt(prompt("Digite um número para saber a tabuada!"))

//Estrutura For
for(i = num; i <= num + 2; i++){
    console.log("Tabuada do número " + i)
    for(j = 0; j <=10; j++){
        console.log(i + " X " + j + " = " + (i*j))
    }
}