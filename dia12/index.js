let nomes = [];
let senhas = [];
let continuar = true;
contador = 0

while(continuar){
    let opcao = prompt("Digite qual operação quer realizar. 1 - Cadastrar, 2 - Login, 3 - Excluir, 4 - encerrar o programa")

    switch(opcao){
        case "1":
            nomes[contador] = prompt("Digite seu nome: ")
            senhas[contador] = prompt("Digite sua senha:")
            contador++;
            break;

        case "2": 
            let nome = prompt("Qual seu nome")
            let senha = prompt("Qual a senha")
            let loginInvalido = false

            for(i=0; i < nomes.length;  i++){
                if(nome == nomes[i] && senha == senha[i]){
                    loginInvalido = true
                }
            }

            if(loginInvalido){
                alert("Login feito com sucesso")
            }else{
                alerta("Login inválido")
            }

            break;

        case "3":
            let nomeExcluir = prompt("Qual nome deseja excluir?")
            let nomesAux = [];
            let senhaAux = [];
            let contadorAux = 0;
            
            for(i = 0; i < contador; i++){
                if(nomeExcluir == nomes[i]){
                    alert("Cdastro excluído com sucesso")
                }else{
                    nomesAux[contadorAux] = nomes[i]
                    senhaAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }

            nomes = nomesAux
            senhas = senhaAux
            contador--

            break

        case "4":
            continuar = false
            break;

        default:
            console.log("Opção Inválida")
            break;
    }
}
