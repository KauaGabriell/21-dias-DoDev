let num = parseInt(prompt("Digite o número inteiro positivo: "));
let fibo = [];
fibo [0] = num - 1;
fibo [1] = num

for(i = 2; i < 10; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];

}

console.log(fibo)