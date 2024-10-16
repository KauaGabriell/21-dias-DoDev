const array = [];
const indice = [];
let contador = 0;

const numeroProcurado = parseInt(prompt("Digite o número a ser pesquisado"));

for(i = 0; i < 10; i++){
    const elemento = parseInt(prompt("Digite o elemento"))
    array[i] = elemento;
}

for(i = 0; i < 10; i++){
    if(array[i] === numeroProcurado){
        indice[contador] = i
        contador++;
    }
}

console.log('O número procurado ' + numeroProcurado + ' foi encontrado nos indices ' + indice );