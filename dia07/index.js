let mediaGeral = 0
let quantHomens = 0
let quantMulherAcima7 = 0
let maiorNota = 0
let contadora = 1

//Nota, sexo
while(contadora <= 5){
nota = Number(prompt("Qual a nota do " + contadora + " ºaluno"))
sexo = prompt("Qual o sexo do aluno? m/f")


    if(sexo == "m"){
        quantHomens++
        if(nota > maiorNota){
            maiorNota = nota
        }
    }

    if(sexo == "f" && nota > 7){
        quantMulherAcima7++
    }

    mediaGeral += nota
    contadora++
}

//Imprimindo Valores
mediaGeral = (mediaGeral / 5)
console.log("A média geral é " + mediaGeral)
console.log("A quantidade de homens que enviaram as notas é " + quantHomens)
console.log("A quantidade de mulheres que tirou acima de 7 é " + quantMulherAcima7)
console.log("A maior nota entre os homens é " + maiorNota)