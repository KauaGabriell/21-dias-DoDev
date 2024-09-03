//Declarando variáveis e perguntando ao usuário as informações

const temFome = prompt("Você está com fome ?sim/não")
const temDinheiro = prompt("Você tem dinheiro ?sim/não")
const restAberto = prompt("O Restaurante está aberto ?sim/não")

//Estrutura condicional 

if(temFome === "não" || temDinheiro === "não"){
    console.log(prompt("Hoje a janta será em casa!!"))
} else if (temFome !== "não" && temDinheiro !== "não" && restAberto === "não"){
    console.log(prompt("Melhor pedir um delivery!!"))
}else{
    console.log(prompt("Hoje você vai jantar no seu restaurante favorito!!"))
}

