const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isFibonacci(num) {
    let a = 0, b = 1;
    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === num || num === 0;
}

rl.question("Digite um número para verificar se pertence à sequência de Fibonacci: ", (input) => {
    const num = parseInt(input);
    
    if (isNaN(num)) {
        console.log("Por favor, insira um número válido.");
    } else if (isFibonacci(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
    }
    rl.close();
});
