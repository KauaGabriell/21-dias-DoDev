let nome = [];
let continuar = true;
let posicaoDoArray = 0;

//Estrutura While

while(continuar){
    let nomeInserido = prompt("Insira seu nome: ");
    nome[posicaoDoArray] = nomeInserido;

    let desejaContinuar = prompt("Pressione 1 se deseja continuar.");
    if(desejaContinuar != 1){
        continuar = false
    }

    posicaoDoArray++;
}
